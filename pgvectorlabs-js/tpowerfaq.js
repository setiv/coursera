const pg = require('pg');
require("@tensorflow/tfjs-node");
const us_encoder = require("@tensorflow-models/universal-sentence-encoder");
const pgvector = require('pgvector');

const config = {
  host: 'localhost',
  database: 'postgres',
  user: 'seti',
  password: '', //Replace with the password of your PostgreSQL instance
  port: 5432
}

const recreate_table = async () => {
    const client = new pg.Client(config);
    await client.connect();

    await client.query('CREATE EXTENSION IF NOT EXISTS vector');
    await client.query('DROP TABLE IF EXISTS tpower');
    await client.query('CREATE TABLE IF NOT EXISTS tpower (id SERIAL PRIMARY KEY, question TEXT, embedding VECTOR(512), answer TEXT)');
  }


const insert_items = async () =>{
    await recreate_table();
    const model = await us_encoder.load();

    const client = new pg.Client(config);
    await client.connect();

    let q_and_a = [
      {
        question:"How do I order a TPower?",
        answer:"Come to our DIY studio to check out our latest offerings and place your order. The cost and wait time will differ based on your design."
      },
      {
        question: "Is it possible to test drive?",
        answer: "This option is not available yet."
      },
      {
        question: "I have questions regarding the order placed. Is there a way to get clarification?",
        answer: "Please call us on our toll-free number, 1800180000."
      },
      {
        question: "I just designed my TPower and submitted my order. What are the next steps?",
        answer: "As your delivery date approaches, we'll contact you to confirm your registration, payment method, and other related matters."
      },
      {
        question: "Can I alter the design at any point in time before the delivery?",
        answer: "Please finalize your order and make a payment only when you are very sure about what you want."
      },
      {
        question: "How long will it take from the time the payment is made ?",
        answer: "It will take between 4 to 6 weeks, depending on the design customization. You will **be contacted** two days prior to delivery."
      },
      {
        question: "Is there a provision to withdraw the order?",
        answer: "Yes. Your TPower consultant can help with that. However, the initial booking fee will not be refunded."
      }
    ];

    // Iterate over each sentence and insert it into the database
    q_and_a.forEach(async (faq, index) => {
    // Generate embeddings for the current sentence using the universal sentence encoder model
    const embeddingsRequest = await model.embed(faq['question']);
    const embeddings = embeddingsRequest.arraySync()[0];

    // Insert the sentence and its embeddings into the 'documents' table
    await client.query('INSERT INTO tpower (question, embedding, answer) VALUES ($1, $2, $3)', [faq['question'], pgvector.toSql(embeddings), faq['answer']]);
  });

  await client.query("COMMIT");

  const { rows } = await client.query(`SELECT question, embedding, answer FROM tpower LIMIT 3`);

    for (let row of rows) {
        console.log(row.question);
        console.log(row.answer);
    }
    process.exit(); // Exit the Node.js process
  }

insert_items();