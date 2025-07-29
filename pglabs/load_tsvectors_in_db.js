// Import the 'pg' module for PostgreSQL interaction
const pg = require('pg');

// Configuration object for PostgreSQL connection
const config = {
  host: 'localhost',       // Database host
  database: 'postgres',    // Database name
  user: 'seti',        // Database user
  password: '',  //Replace this with the password of your PostgreSQL instance
  port: 5432               // Database port
}

// Array of sentences to **be inserted** into the database
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

// Create a PostgreSQL client with the configuration
const client = new pg.Client(config);

// Function to add data to the PostgreSQL database
const addData = async () => {
    console.log('Connected to PostgreSQL database');

    // SQL query to Create a table if it doesn't already exist
    // 'sentence' is column to store the sentence as a tsvector for full-text search
    // actual_sentence is column to store the actual sentence as text
    const createTableQuery = `
          CREATE TABLE IF NOT EXISTS mysentences (
            id SERIAL PRIMARY KEY,
            sentence tsvector,
            actual_sentence TEXT
          )`;

    // Execute the query to create the table
    await client.query(createTableQuery);
    console.log('Table created successfully');

    // Loop through the sentences array and insert each sentence into the table
    for (const sentence of sentences) {
        await client.query('INSERT INTO mysentences (sentence, actual_sentence) VALUES ($1, $2)', [sentence, sentence]);
    }

    // Query to select all rows from the table
    const { rows } = await client.query("SELECT * FROM mysentences");

    // Loop through the result rows and print each sentence
    for (let row of rows) {
        console.log(row.actual_sentence + "   " + row.sentence);
    }
}

// Function to retrieve data based on a full-text search query
const getData = async (str_query) => {
    console.log('Connected to PostgreSQL database');

    // Execute a full-text search query on the 'mysentences' table
    const { rows } = await client.query("SELECT actual_sentence FROM mysentences WHERE sentence @@ to_tsquery('english', $1)", [str_query]);

    // Loop through the result rows and print each matching sentence
    for (let row of rows) {
        console.log(row.actual_sentence);
    }
}

// Main function to connect to the database, add data, and retrieve data
const main = async () => {
    // Connect to the PostgreSQL database
    await client.connect();
    // Insert data
    await addData();
    //Retrieve data
    await getData("penguin");
}

// Execute the main function and exit the process when done
main().then(() => {
    process.exit();
});