// Import required modules
const pg = require('pg');
require("@tensorflow/tfjs-node");
const us_encoder = require("@tensorflow-models/universal-sentence-encoder");
const pgvector = require('pgvector');


// Configuration for PostgreSQL connection
const config = {
  host: 'localhost',
  database: 'postgres',
  user: 'seti',
  password: '', //Replace with the password of your PostgreSQL instance
  port: 5432
}

// Function to create an extension and recreate the table
const recreate_table = async () => {
    // Connect to the PostgreSQL database
    const client = new pg.Client(config);
    await client.connect();

    // Ensure the required PostgreSQL extension 'vector' is created by the
    await client.query('CREATE EXTENSION IF NOT EXISTS vector');

    // Drop existing 'documents' table if it exists
    //uncomment the line below if you want to start with a clean table
    await client.query('DROP TABLE IF EXISTS documents');

    // Create a new 'documents' table with appropriate schema - notice the Vector datatype being used
    await client.query('CREATE TABLE IF NOT EXISTS documents (id SERIAL PRIMARY KEY, content TEXT, embedding VECTOR(512))' );
}

// Function to insert items into the database
const insert_items = async () =>{
  // Recreate the database and necessary tables
  await recreate_table();

  // Load the universal sentence encoder model
  const model = await us_encoder.load();

  // Connect to the PostgreSQL database
  const client = new pg.Client(config);
  await client.connect();

  // Define a list of sentences to **be inserted** into the database
  let sentences = [
    "The horse is galloping",
    "The owl is hooting",
    "The rabbit is hopping",
    "The koala is munching",
    "The penguin is waddling",
    "The kangaroo is hopping",
    "The fox is prowling",
    "The parrot is squawking",
    "The turtle is crawling",
    "The cheetah is sprinting"
  ]

  // Iterate over each sentence and insert it into the database
  for (const sentence of sentences) {
    // Generate embeddings for the current sentence using the universal sentence encoder model
    const embeddingsRequest = await model.embed(sentence);
    const embeddings = embeddingsRequest.arraySync()[0];

    // Insert the sentence and its embeddings into the 'documents' table
    await client.query('INSERT INTO documents (content, embedding) VALUES ($1, $2)', [sentence, pgvector.toSql(embeddings)]);
  };

  // Query the database to retrieve the first three documents
  const { rows } = await client.query(`SELECT content, embedding FROM documents LIMIT 3`);

  // Display the content and embeddings of the retrieved documents
  for (let row of rows) {
      console.log(row.content);
      console.log("\n");
      console.log(row.embedding);
      console.log("\n")
  }

  // Exit the Node.js process
  await client.end();
  process.exit();
}

// Call the insert_items function to execute the insertion and retrieval operations
insert_items()