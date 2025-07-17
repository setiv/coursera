// creating a collection using chromadb and embedding data


const {ChromaClient, DefaultEmbeddingFunction} = require('chromadb');   // importing necessary classes from chromadb package
const client = new ChromaClient();                              // chromaclient is used to interact with the chromadb database

const collectionName = "my_grocery_collection";
const default_emd = new DefaultEmbeddingFunction();

async function main() {
    try {

        // to ensure a clean run each time, collection is deleted before creating a new one (useful for testing)
        await client.deleteCollection({name: collectionName});

        const collection = await client.getOrCreateCollection({
            name: collectionName,
            embeddingFunction: default_emd
        })

        // defining sample data for the collection
        const texts = [
            'fresh red apples',
            'organic bananas',
            'ripe mangoes',
            'whole wheat bread',
            'farm-fresh eggs',
            'natural yogurt',
            'frozen vegetables',
            'grass-fed beef',
            'free-range chicken',
            'fresh salmon fillet',
            'aromatic coffee beans',
            'pure honey',
            'golden apple',
            'red fruit'
        ];

        // generate unique ids for each text string
        const ids = texts.map((_,index) => `food_${index + 1}`);

        // generate embeddings for the texts using default embedding function
        // the 'generate' method processes the texts and return their corresponding embeddings 
        const embeddingsData = await default_emd.generate(texts);

        // add documents, their corresponding ids, and embeddings to the collection
        // the documents are the actual text items, the ids are the unique identifiers, and the embeddings are the numeric vector representations of the text
        await collection.add({
            ids: ids, 
            documents: texts,
            embeddings: embeddingsData   
        });

        // retrieve all items stored in the collection
        const allItems = await collection.get();

        // display
        console.log(allItems);

        // perform similarity search 
        await performSimilaritySearch(collection, allItems);

    } catch (error) {
        console.error("Error: ", error);
    }
}

async function performSimilaritySearch(collection, allItems) {
    try {
        // define query term for similarity search
        const queryTerm = "apple";

        // perform a query search to search for the most similar documents to the 'queryTerm'
        const results = await collection.query ({
            queryTexts: [queryTerm],
            n: 3                        // retrieve top 3 results
        });

        // display
        if (!results || results.length === 0) {
            console.log(`No documents found similar to "${queryTerm}"`);
        } else {
            console.log(`Top 3 similar documents to "${queryTerm}":`);
            // access the nested arrays in 'results.ids' and 'results.distances'
            for (let i = 0; i < 3; i++) {
                const id = results.ids[0][i];               // get ids from 'ids' array
                const score = results.distances[0][i];      // get score from 'distances' array

                // retrieve text data using the document id 
                const text = allItems.documents[allItems.ids.indexOf(id)];
                if (!text) {
                    console.log(` - ID: ${id}, Text: 'Text not available', Score: ${score}`);
                } else {
                    console.log(` - ID: ${id}, Text: '${text}', Score: ${score}`);
                }
            }
        }

    } catch (error) {
        console.error("Error: ", error);
    }

}

main();