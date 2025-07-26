const pg = require('pg');
require("@tensorflow/tfjs-node");
const us_encoder = require("@tensorflow-models/universal-sentence-encoder");
const pgvector = require('pgvector');
const pgp = require('pg-promise')({});

const config = {
  host: 'localhost',
  database: 'postgres',
  user: 'seti',
  password: '',
  port: 5432
}

const db = pgp(config);

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

      // Prepare sentences for insertion
      let q_and_a_arr = [];
      let questions = [];
      q_and_a.forEach((qa, index) => {
          qa['id'] = index;
          q_and_a_arr.push(qa)
          questions.push(qa['question']);
      });

      // Embed sentences using the model
      const embeddingsRequest = await model.embed(questions);
      const embeddings = embeddingsRequest.arraySync();
      // Combine sentences with embeddings
      q_and_a_arr.forEach((q_and_a, index) => {
        q_and_a['embedding'] = embeddings[index]
      })

    // Define columns for insertion
    const columns = new pgp.helpers.ColumnSet(['question','embedding','answer'],{table:'tpower'})
    const values = [];
    // Iterate through q_and_a and prepare values for insertion
    for(let i=0; i<q_and_a_arr.length; i++) {
        values.push({question: q_and_a_arr[i]['question'],embedding:`[${q_and_a_arr[i]['embedding']}]`, answer:q_and_a_arr[i]['answer']});
    }
    // Generate and execute insert query
    const query = pgp.helpers.insert(values, columns);
    await db.none(query);

  const { rows } = await client.query(`SELECT question, embedding, answer FROM tpower LIMIT 3`);

    for (let row of rows) {
        console.log(row.question);
        console.log(row.answer);
    }
  }

  const searchItems = async (question) =>{
  const model = await us_encoder.load();

  const client = new pg.Client(config);
  await client.connect();

  const embeddingsRequest = await model.embed(question);
  const embeddings = embeddingsRequest.arraySync()[0];

  const { rows } = await client.query(`SELECT answer FROM tpower ORDER bY embedding <-> '${JSON.stringify(embeddings)}' LIMIT 1`);
  
  for (let row of rows) {
      console.log("\n******\n");  
      console.log(row.answer);
  }
}

const main = async () => {

    await insert_items();
    await searchItems("Is it possible to test drive?");
    process.exit(); // Exit the Node.js process
}

main();