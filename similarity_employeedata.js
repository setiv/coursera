// creating a collection within chromadb and embed data within it 
// 6/17/25

// chroma client is used to create a client instance for interacting with chroma database
const { ChromaClient, DefaultEmbeddingFunction} = require('chromadb');
const client = new ChromaClient();      // establishing a connection with the chroma database

// the default_emd function will be used to generate embeddings (vector representations) for the data
const collectionName = "employee_collection";
const default_emd = new DefaultEmbeddingFunction(); 

async function main() {         // async allows the use of 'await'
    try {
        const collection = await client.getOrCreateCollection({
            name: collectionName,
            embeddings: default_emd
        });

        const employees = [
            {
                id: "employee_1",
                name: "John Doe",
                experience: 5,
                department: "Engineering",
                role: "Software Engineer",
              },
              {
                id: "employee_2",
                name: "Jane Smith",
                experience: 8,
                department: "Marketing",
                role: "Marketing Manager",
              },
              {
                id: "employee_3",
                name: "Alice Johnson",
                experience: 3,
                department: "HR",
                role: "HR Coordinator",
              },
              {
                id: "employee_4",
                name: "Michael Brown",
                experience: 12,
                department: "Engineering",
                role: "Senior Software Engineer",
              },
              {
                id: "employee_5",
                name: "Emily Wilson",
                experience: 2,
                department: "Marketing",
                role: "Marketing Assistant",
              },
              {
                id: "employee_6",
                name: "David Lee",
                experience: 15,
                department: "Engineering",
                role: "Engineering Manager",
              },
              {
                id: "employee_7",
                name: "Sarah Clark",
                experience: 8,
                department: "HR",
                role: "HR Assistant",
              },
              {
                id: "employee_8",
                name: "Chris Evans",
                experience: 20,
                department: "Engineering",
                role: "Senior Architect",
              },
              {
                id: "employee_9",
                name: "Jessica Taylor",
                experience: 4,
                department: "Marketing",
                role: "Marketing Specialist",
              },
              {
                id: "employee_10",
                name: "Alex Rodriguez",
                experience: 18,
                department: "Engineering",
                role: "Lead Software Engineer",
              },
              {
                id: "employee_11",
                name: "Hannah White",
                experience: 6,
                department: "HR",
                role: "HR Manager",
              },
              {
                id: "employee_12",
                name: "Kevin Martinez",
                experience: 2,
                department: "Engineering",
                role: "Chief Technology Officer",
              },
              {
                id: "employee_13",
                name: "Rachel Brown",
                experience: 7,
                department: "Marketing",
                role: "Marketing Director",
              },
              {
                id: "employee_14",
                name: "Matthew Garcia",
                experience: 3,
                department: "Engineering",
                role: "Junior Software Engineer",
              },
              {
                id: "employee_15",
                name: "Olivia Moore",
                experience: 12,
                department: "Engineering",
                role: "Principal Engineer",
              },
        ];

        // use map function to create a new array containing the experience of each employee as a string
        const employeeExperiences = employees.map((employee) => employee.experience.toString());

        // generate embeddings
        const embeddingsData = await default_emd.generate(employeeExperiences);

        // adding data to the collection
        await collection.add({
            ids: employees.map((employee) => employee.id),
            employeeNames: employees.map((employee) => employee.name),
            documents: employeeExperiences,
            embeddings: embeddingsData,
        });

        // retrieve all items from collection and display 
        const allItems = await collection.get();
        console.log(allItems);

        await performSimilaritySearch(collection, allItems);

    } catch(error) {
        console.error("Error", error);
    }
}


async function performSimilaritySearch(collection, allItems) {
    const queryTerm = "3";

    const results = await collection.query({
        collection: collectionName,
        queryTexts: [queryTerm],
        n: 3,
    });

    if (!results || results.length === 0) {
        console.log(`No documents found similar to "${queryTerm}`);
    } else {
        console.log(results);
        console.log(`Top 3 similar documents to "${queryTerm}":`);

        for (let i = 0; i < 3; i++) {
            // extract document id and similarity score from the results
            const id = results.ids[0][i];
            const score = results.distances[0][i];
            // retrieve the document text corresponding to the current id from allItems
            const text = allItems.documents[allItems.ids.indexOf(id)];
            // check if text is available
            if (!text) {
                console.log(` - ID: ${id}, Text: 'Text not available', Score: ${score}`);
            } else {
                console.log(` - ID: ${id}, Text: '${text}', Score: ${score}`);
            }
        }
    }
}

main();
