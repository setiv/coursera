// Import required packages
const pg = require('pg');
require("@tensorflow/tfjs-node");
const us_encoder = require("@tensorflow-models/universal-sentence-encoder");
const pgp = require('pg-promise')({});

// Configuration for PostgreSQL database connection
const config = {
  host: 'localhost',
  database: 'postgres',
  user: 'seti',
  password: '', //Replace this password with that of the postgres instance
  port: 5432
}

// Initialize pg-promise with the configuration
const db = pgp(config);

// Function to store sentences with embeddings in PostgreSQL database
const storeInPG = async (sentences) => {
    // Define columns for insertion
    const columns = new pgp.helpers.ColumnSet(['content','embedding'],{table:'documents'})
    const values = [];
    // Iterate through sentences and prepare values for insertion
    for(let i=0; i<sentences.length; i++) {
        values.push({content: sentences[i]['sentence'],embedding:`[${sentences[i]['embedding']}]`});
    }
    // Generate and execute insert query
    const query = pgp.helpers.insert(values, columns);
    await db.none(query);
}

// Function to recreate the documents table
const recreate_table = async () => {
    const client = new pg.Client(config);
    await client.connect();
    // Create vector extension if not exists
    await client.query('CREATE EXTENSION IF NOT EXISTS vector');
    // Drop existing documents table if exists
    //uncomment the line below if you want to start from scratch
    await client.query('DROP TABLE IF EXISTS documents');
    // Create documents table with required schema
    await client.query('CREATE TABLE IF NOT EXISTS documents (id SERIAL PRIMARY KEY, content TEXT, embedding VECTOR(512))');
}

// Load universal sentence encoder model and process sentences
const main = async ()=>{

    // Recreate the database and documents table
    await recreate_table();

    const model = await us_encoder.load();
    // Define sample sentences
    let sentences = [
      'The dog is barking',
      'The cat is purring',
      'The bear is growling',
      'The lion is roaring',
      'The elephant is trumpeting',
      'The tiger is prowling',
      'The wolf is howling',
      'The monkey is chattering',
      'The snake is hissing',
      'The giraffe is grazing',
      'The crocodile is lurking',
      'The eagle is soaring',
      'The dolphin is swimming',
    ];
    // Prepare sentences for insertion
    let sentencesArray = [];
    sentences.forEach((sentence, index) => {
        let sentencesDictionary = {}
        sentencesDictionary['id'] = index;
        sentencesDictionary['sentence'] = sentence;
        sentencesArray.push(sentencesDictionary)
    });
    // Embed sentences using the model
    const embeddingsRequest = await model.embed(sentences);
    const embeddings = embeddingsRequest.arraySync();
    // Combine sentences with embeddings
    sentencesArray.forEach((element, index) => {
        element['embedding'] = embeddings[index]
    })
    // Store sentences with embeddings in PostgreSQL database
    await storeInPG(sentencesArray);
    console.log("Data added to the database")
    await pgp.end(); // Close the pg-promise connection
    process.exit(); // Exit the Node.js process
}

main()