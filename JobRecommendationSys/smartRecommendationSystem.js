const fs = require("fs");
const pdf = require("pdf-parse");
const readline = require("readline");
const dotenv = require("dotenv");
dotenv.config();
const { HfInference } = require("@huggingface/inference");
const { ChromaClient } = require("chromadb");
const jobPostings = require('./jobPostings.js');

const hf = new HfInference(process.env.HUGGINGFACE_HUB_TOKEN);
const chroma = new ChromaClient();

const collectionName = "job_collection";

const extractTextFromPDF = async (filePath) => {
  try {
    console.log("Reading file: ", filePath);
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    const text = data.text.replace(/\n/g, " ").replace(/ +/g, " ");
    return text;
  } catch (err) {
    console.error("Error extracting text from PDF:", err);
    throw err;
  }
};

const generateEmbeddings = async (text) => {
    try {
      const result = await hf.featureExtraction({
        model: "sentence-transformers/all-MiniLM-L12-v2",
        inputs: text,
      });
      // console.log("Embedding API result:", result); // Log the entire result
        return result
    } catch (err) {
      console.error("Error converting text to embeddings:", err);
      throw err;
    }
};

const promptUserInput = (query) => {
        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        });
        return new Promise((resolve) =>
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        })
        );
};

const storeEmbeddings = async (jobPostings) => {
  const jobEmbeddings = [];
  const metadatas = jobPostings.map((item, index) => ({
    jobTitle: item.jobTitle,
    index: index,
  })); // Empty metadata objects (*** updated to resolve empty metadata error)

  for (const job of jobPostings) {
    const embedding = await generateEmbeddings(job.jobDescription.toLowerCase());
    jobEmbeddings.push(embedding);
  }
  const ids = jobPostings.map((_, index) => index.toString());
  const jobTexts = jobPostings.map(job => job.jobTitle);

  // validation check to ensure ids, documents, embeddings, and metadata are the same length
  if (ids.length !== jobTexts.length || jobTexts.length !== jobEmbeddings.length || jobEmbeddings.length !== metadatas.length) {
    throw new Error("Inconsistent lengths among ids, documents, embeddings, and metadata.");
  }

  try {
    const collection = await chroma.getOrCreateCollection({ name: collectionName });

    // wipe all old records by ID before adding new ones 
    const allIds = await collection.get();
    if (allIds && allIds.ids && allIds.ids.length > 0) {
        await collection.delete({ ids: allIds.ids });  // **** clears data, not the collection itself
        console.log(`Deleted ${allIds.ids.length} old embeddings.`);
    }

    await collection.add({
      ids: ids,
      documents: jobTexts,
      embeddings: jobEmbeddings,
      metadatas: metadatas,
    });
    console.log("Stored embeddings in Chroma DB.");
  } catch (error) {
    console.error("Error storing embeddings in Chroma DB:", error);
    throw error;
  }
};

const main = async () => {
    try {
        await storeEmbeddings(jobPostings);
  
        // Extract and process the resume PDF
        const filePath = await promptUserInput("Enter the path to the resume PDF: ");
        const text = await extractTextFromPDF(filePath);
      
        // Generate embedding for the resume text
        const resumeEmbedding = await generateEmbeddings(text.toLowerCase());
  
        // Query Chroma DB for similar job postings
        const collection = await chroma.getCollection({ name: collectionName });
        const results = await collection.query({
          queryEmbeddings: [resumeEmbedding],
          n: 5, // Get top 5 similar items
        });
  
        console.log("Chroma DB Query Results:", results);
  
        if (results.ids.length > 0 && results.ids[0].length > 0) {
            console.log("Recommended Job Postings:");
            results.ids[0].forEach((id, index) => {
            const jobTitle = results.documents[0][index];
            console.log(`Top ${index + 1} Recommended Job Posting ==> ${jobTitle}`);
          });
        } else {
          console.log("No similar job postings found.");
        }
    } catch (err) {
      console.error("An error occurred:", err);
    }
};

main();