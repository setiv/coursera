/*
1. create collection
2. convert the collection data into vector embeddings
3. store the embeddings into the database
4. convert user input into a vector embeddings
5. compare embeddings in the database to the converted user input
6. rank and return top 5 matches
*/


const { ChromaClient } = require('chromadb');
const { HfInference } = require("@huggingface/inference");
const dotenv = require('dotenv');
const jobPostings = require ('./jobPostings.js');
dotenv.config();
const client = new ChromaClient();
const hf = new HfInference(process.env.HUGGINGFACE_HUB_TOKEN);
const collectionName = "job_collection";

async function generateEmbeddings(texts) {
  const results = await hf.featureExtraction({
    model: "sentence-transformers/all-MiniLM-L6-v2",
    inputs: texts,
  });
  return results;
}

async function classifyText(word, labels) {
    const response = await hf.zeroShotClassification({
      model: "facebook/bart-large-mnli",
      inputs: word,
      parameters: {
        candidate_labels: labels,
      },
    });

    // response is an array of { label, score }
  if (!Array.isArray(response)) {
    throw new Error("Unexpected response format from HuggingFace");
  }

  // Extract labels and scores into separate arrays (if needed)
  const labelsArr = response.map(r => r.label);
  const scoresArr = response.map(r => r.score);

  return { labels: labelsArr, scores: scoresArr };
}

async function extractFilterCriteria (query) {
    const criteria = { location: null, jobTitle: null, company: null, jobType: null };
    const labels = ["location", "job title", "company", "job type"];
 
    const words = query.split(" ");
    for (const word of words) {
        const result = await classifyText(word,labels);
        console.log('result',result);
        const highestScoreLabel = result.labels[0];
        const score = result.scores[0];
    
        if (score > 0.5) {
            switch (highestScoreLabel) {
                case "location":
                    criteria.location = word;
                    break;
                case "job title":
                    criteria.jobTitle = word;
                    break;
                case "company":
                    criteria.company = word;
                    break;
                case "job type":
                    criteria.jobType = word;
                    break;
                default:
                    break;
            }
        }

    }
    return criteria;
}

async function performSimilaritySearch(collection, queryTerm, jobPostings) {
  try {
        const queryEmbedding = await generateEmbeddings([queryTerm]);

        const results = await collection.query({
            collection: collectionName,
            queryEmbeddings: queryEmbedding,
            n: 3,
        });

        // DEBUGGING LINES
        console.log("Top retrieved IDs:", results.ids[0]);
        console.log("Distances:", results.distances[0]);

        if (!results || !results.ids || results.length === 0) {
            console.log(`No job postings found similar to "${queryTerm}"`);
            return [];
        }

        let topJobPostings = results.ids[0].map((id, index) => {
            const matchedJob = jobPostings.find(job => job.jobId.toString() === id);
            return {
                id,
                score: results.distances[0][index],
                jobTitle: matchedJob?.jobTitle,
                jobDescription: matchedJob?.jobDescription,
                jobType: matchedJob?.jobType,
                company: matchedJob?.company
            };
        }).filter(Boolean);
        return topJobPostings.sort((a, b) => a.score - b.score);
    } catch (error) {
        console.error("Error during similarity search:", error);
    return [];
  }
}

async function filterJobPostings(jobPostings, filterCriteria) {
    return jobPostings.filter(job => {
        const matchesLocation = !filterCriteria.location || job.location.toLowerCase().includes(filterCriteria.location.toLowerCase());
        const matchesJobTitle = !filterCriteria.jobTitle || job.jobTitle.toLowerCase().includes(filterCriteria.jobTitle.toLowerCase());
        const matchesCompany = !filterCriteria.company || job.company.toLowerCase().includes(filterCriteria.company.toLowerCase());
        const matchesJobType = !filterCriteria.jobType || job.jobType.toLowerCase().includes(filterCriteria.jobType.toLowerCase());

        return matchesLocation && matchesJobTitle && matchesCompany && matchesJobType;
    });
}

async function main() {
    const query = "Creative Studio";

    try {
        console.log("Trying to get or create collection...");
        let collection;
        try {
            collection = await client.getOrCreateCollection({ name: collectionName });
            
            // fetch and delete all existing records (if any)
            const allIds = await collection.get();
            if (allIds && allIds.ids && allIds.ids.length > 0) {
                await collection.delete({ ids: allIds.ids });  // **** clears data, not the collection itself
                console.log(`Deleted ${allIds.ids.length} existing documents from collection.`);
            }
            console.log("Collection ready:", collection);
        } catch (err) {
            console.error("Failed to get/create collection:", err.message);
            console.error(err); // Log the full error object
            return;
        }

        // ensure unique job IDs
        const uniqueIds = new Set();

        jobPostings.forEach((job, index) => {
            let id = job.jobId.toString();
            while (uniqueIds.has(id)) {
                id = `${job.jobId}_${index}`;
            }
            uniqueIds.add(id);
            job.jobId = id;
        });

       const jobTexts = jobPostings.map(
            (job) => `${job.jobTitle}. ${job.jobDescription}. ${job.jobType}. ${job.location}`);
        const embeddingsData = await generateEmbeddings(jobTexts);


        await collection.add({
            ids: jobPostings.map((job) => job.jobId.toString()),
            documents: jobTexts,
            embeddings: embeddingsData,
        });


        // extract filter criteria from user input
        const filterCriteria = await extractFilterCriteria(query);
        console.log("Filter Criteria:", filterCriteria);

        // perform similarity search on all postings
        const initialResults = await performSimilaritySearch(collection, query, jobPostings);

        // filter top results (optional)
        let topResults = await filterJobPostings(initialResults, filterCriteria);
        
        // fallback if filter yields < 3
        if (topResults.length < 3) {
            const fallback = initialResults.filter(r => !topResults.includes(r));
            topResults = [...topResults, ...fallback].slice(0,3);
        }
        
        // display
        topResults.forEach((job, index) => {
            console.log(`Top ${index + 1} Recommended Job Posting ==> title: ${job.jobTitle}, jobType: ${job.jobType}, jobDescription: ${job.jobDescription}, company: ${job.company}`);
        });

    } catch (error) {
        console.error("Error:", error);
    }
}

main();
