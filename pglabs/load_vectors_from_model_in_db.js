const pg = require('pg');
require("@tensorflow/tfjs-node");
const us_encoder = require("@tensorflow-models/universal-sentence-encoder");

const config = {
  host: 'localhost',
  database: 'postgres',
  user: 'seti',
  password: '',// Replace the password with the password of your postgres instance
  port: 5432
}

// Create a PostgreSQL client with the config object
const client = new pg.Client(config);


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

const vectorize = async (model, sentence) => {
  const embeddingsRequest = await model.embed(sentence);
  const embeddings = embeddingsRequest.arraySync()[0];
  return embeddings;
}

//Calculate Cosine similarity
const checkSimilarity = (v1,v2)=>{
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < v1.length; i++) {
        dotProduct += v1[i] * v2[i];
        normA += v1[i] ** 2;
        normB += v2[i] ** 2;
    }

    const similarity = dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    return similarity;
}


const create_table = async () => {
      // SQL query to Create a table
      const createTableQuery = `
      CREATE TABLE IF NOT EXISTS mysentences_tf (
              id SERIAL PRIMARY KEY,
              sentence TEXT,
              embedding FLOAT[]
            )`;

      // Execute the query to create the table
      await client.query(createTableQuery);
      console.log('Table created successfully');
      return;
}

const insert_data = async(model)=>{
  for (const sentence of sentences) {
    const embeddings = await vectorize(model, sentence);
    await client.query('INSERT INTO mysentences_tf (sentence, embedding) VALUES ($1, $2)', [sentence, embeddings])
  }
}

// Connect and search the table
const search_a_match = async (model, querystr)=>{
  const newvec = await vectorize(model, querystr);
  const { rows } = await client.query(`SELECT * FROM mysentences_tf`)

  const match_dist = {};
  for (let row of rows) {
    match_dist[row.sentence] = checkSimilarity(row.embedding, newvec);
  }
  // Convert the object into an array of key-value pairs
  const arr = Object.entries(match_dist);
  // Sort the array based on the values
  arr.sort((a, b) => b[1] - a[1]);
  return arr[0][0];
}


const main = async ()=>{
  await client.connect();
  console.log('Connected to PostgreSQL database');
  const model = await us_encoder.load();
  console.log("Model loaded successfully");
  await create_table();
  await insert_data(model);
  const result = await search_a_match(model, "What does the parrot do?")
  console.log(`The closest match is "${result}"`);
  process.exit();
}

main();