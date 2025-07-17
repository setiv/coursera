
// creating a collection within chromadb and embed data within it 
// 6/17/25

// chroma client is used to create a client instance for interacting with chroma database
const { ChromaClient, DefaultEmbeddingFunction} = require('chromadb');
const client = new ChromaClient();      // establishing a connection with the chroma database

// the default_emd function will be used to generate embeddings (vector representations) for the data
const collectionName = "book_collection";
const default_emd = new DefaultEmbeddingFunction(); 

async function main() {         // async allows the use of 'await'
    try {
        const collection = await client.getOrCreateCollection({
            name: collectionName,
            embeddings: default_emd
        });

        const books = [
            {
                id: "book_1",
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                genre: "Classic",
                year: 1925,
                rating: 4.1,
            },
            {
                id: "book_2",
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                genre: "Classic",
                year: 1960,
                rating: 4.3,
            },
            {
                id: "book_3",
                title: "1984",
                author: "George Orwell",
                genre: "Dystopian",
                year: 1949,
                rating: 4.4,
            },
            {
                id: "book_4",
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                genre: "Literary Fiction",
                year: 1951,
                rating: 4.0,
            },
            {
                id: "book_5",
                title: "Pride and Prejudice",
                author: "Jane Austen",
                genre: "Romance",
                year: 1813,
                rating: 4.2,
            },
            {
                id: "book_6",
                title: "Harry Potter and the Philosopher's Stone",
                author: "J.K. Rowling",
                genre: "Fantasy",
                year: 1997,
                rating: 4.5,
            },
            {
                id: "book_7",
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                genre: "Fantasy",
                year: 1954,
                rating: 4.5,
            },
            {
                id: "book_8",
                title: "The Hitchhiker's Guide to the Galaxy",
                author: "Douglas Adams",
                genre: "Science Fiction",
                year: 1979,
                rating: 4.2,
            },
            {
                id: "book_9",
                title: "Frankenstein",
                author: "Mary Shelley",
                genre: "Gothic",
                year: 1818,
                rating: 4.0,
            },
            {
                id: "book_10",
                title: "The Hunger Games",
                author: "Suzanne Collins",
                genre: "Dystopian",
                year: 2008,
                rating: 4.2,
            },
        ];

        // use map function to create a new array containing the experience of each employee as a string
        const booksExperiences = books.map((book) => book.rating.toString());

        // generate embeddings
        const embeddingsData = await default_emd.generate(booksExperiences);

        // adding data to the collection
        await collection.add({
            ids: books.map((book) => book.id),
            bookNames: books.map((book) => book.name),
            documents: booksExperiences,
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
    const queryTerm = "4.2";

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
