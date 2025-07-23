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

// Create a PostgreSQL client with the config object
const client = new pg.Client(config);

// Array of sentences to be inserted into the database
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

// Function to pad an array to a specified length with zeros
const padArray = (array) => {
    const length = 100;  // Desired length of the padded array

    // Check if the array is already the intended length or longer
    if (array.length >= length) {
        // If so, return a slice of the array to the intended length
        return array.slice(0, length);
    } else {
        // Otherwise, create a padding array filled with zeros to reach the intended length
        const padding = Array(length - array.length).fill(0);
        // Concatenate the original array with the padding array
        return array.concat(padding);
    }
}

// Function to convert a sentence into a numerical vector
const vectorize = (sentence) => {
    // Define a function to map characters to their ASCII values
    const charToInt = (char) => char.charCodeAt(0);

    // Convert the sentence into an array of ASCII values
    const vector = sentence.split('').map(charToInt);

    // Pad the resulting array to ensure it is 100 elements long
    return padArray(vector);
}

// Connect to the PostgreSQL database and create a table
client.connect()
  .then(async () => {
    console.log('Connected to PostgreSQL database');

    // SQL query to Create a table
    const createTableQuery = `
          CREATE TABLE IF NOT EXISTS mynewsentences (
            id SERIAL PRIMARY KEY,
            sentence TEXT,
            embedding INTEGER[]
          )`;

    // Execute the query to create the table
    await client.query(createTableQuery);
    console.log('Table created successfully');
    for (const sentence of sentences) {
        const embeddings = vectorize(sentence);
        await client.query('INSERT INTO mynewsentences (sentence, embedding) VALUES ($1, $2)', [sentence, embeddings])
      }

      const { rows } = await client.query(`SELECT * FROM mynewsentences`)

      for (let row of rows) {
          console.log(row.sentence);
      }
      process.exit(); // Exit the Node.js process
  })
  .catch(err => console.error('Error connecting to PostgreSQL database', err));