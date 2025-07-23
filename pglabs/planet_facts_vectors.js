const pg = require('pg');
require("@tensorflow/tfjs-node");
const us_encoder = require("@tensorflow-models/universal-sentence-encoder");

const config = {
  host: 'localhost',
  database: 'postgres',
  user: 'seti',
  password: '',
  port: 5432
}

// Create a PostgreSQL client with the config object
const client = new pg.Client(config);


const planetarySystemFacts = [
    "The Solar System consists of eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
    "Planets in a planetary system orbit around a central star due to gravitational attraction.",
    "The Sun, a G-type main-sequence star, is the central star of our Solar System.",
    "Exoplanets are planets that orbit stars outside of our Solar System. Thousands of exoplanets have been discovered.",
    "The discovery of exoplanets has shown that planetary systems come in a wide variety of configurations, including hot Jupiters, super-Earths, and even Earth-like planets in the habitable zone.",
    "Planetary systems often include other celestial objects such as moons, asteroids, comets, and dwarf planets.",
    "The formation of planetary systems occurs within protoplanetary disks, where dust and gas coalesce to form planets and other objects.",
    "Binary star systems, where two stars orbit around a common center of mass, can also have planets orbiting around them.",
    "The study of planetary systems helps scientists understand the formation, evolution, and diversity of planetary systems both within and beyond our Solar System.",
    "The discovery of potentially habitable exoplanets has sparked interest in the search for extraterrestrial life and the possibility of other habitable worlds."
];

const vectorize = async (model, fact) => {
  const embeddingsRequest = await model.embed(fact);
  const embeddings = embeddingsRequest.arraySync()[0];
  return embeddings;
}

const checkDistance = (v1,v2)=>{
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < v1.length; i++) {
        dotProduct += v1[i] * v2[i];
        normA += v1[i] ** 2;
        normB += v2[i] ** 2;
    }

    const distance = dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    return distance;
}


const create_table = async () => {
      // SQL query to Create a table
      const createTableQuery = `
      CREATE TABLE IF NOT EXISTS planetfacts (
              id SERIAL PRIMARY KEY,
              fact TEXT,
              embedding FLOAT[]
            )`;

      // Execute the query to create the table
      await client.query(createTableQuery);
      console.log('Table created successfully');
      return;
}

const insert_data = async(model)=>{
  for (const fact of planetarySystemFacts) {
    const embeddings = await vectorize(model, fact);
    await client.query('INSERT INTO planetfacts (fact, embedding) VALUES ($1, $2)', [fact, embeddings])
  }
}

// Connect and search the table
const search_a_match = async (model, querystr)=>{
  const newvec = await vectorize(model, querystr);
  const { rows } = await client.query(`SELECT * FROM planetfacts`)

  const match_dist = {};
  for (let row of rows) {
    match_dist[row.fact] = checkDistance(row.embedding, newvec);
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
  const result = await search_a_match(model, "What are exoplanets?")
  console.log(`The closest match is "${result}"`);
  process.exit();
}

main();