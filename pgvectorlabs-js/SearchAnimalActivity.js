const pg = require('pg');
require("@tensorflow/tfjs-node");
const us_encoder = require("@tensorflow-models/universal-sentence-encoder");

const config = {
  host: 'localhost',
  database: 'postgres',
  user: 'seti',
  password: '', //Replace this password with that of the postgres instance
  port: 5432
}

const searchItems = async (question) =>{
  const model = await us_encoder.load();

  const client = new pg.Client(config);
  await client.connect();

  const embeddingsRequest = await model.embed(question);
  const embeddings = embeddingsRequest.arraySync()[0];

  const { rows } = await client.query(`SELECT content, embedding FROM documents ORDER bY embedding <-> '${JSON.stringify(embeddings)}' LIMIT 1`);

  for (let row of rows) {
      const sentence = row.content;
      console.log(row.content);
  }
  process.exit(); // Exit the Node.js process
}

searchItems("What does the wolf do?")