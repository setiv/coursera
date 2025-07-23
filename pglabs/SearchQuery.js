// Import the 'pg' module for PostgreSQL interaction
const pg = require('pg');

// Configuration object for PostgreSQL connection
const config = {
  host: 'localhost',
  database: 'postgres',
  user: 'seti',
  password: '',//Replace this with the password of your PostgreSQL instance
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

const padArray = (array) =>{
  const length = 100;
  if (array.length >= length) {
      return array.slice(0, length);
  } else {
      const padding = Array(length - array.length).fill(0);
      return array.concat(padding); // Concatenate the original array with the padding array
  }
}

const vectorize = (sentence) => {
    // Define a function to map characters to numerical values
    const charToInt = (char) => char.charCodeAt(0);

    // Vectorize the string using the ASCII values of characters
    const vector = sentence.split('').map(charToInt);
    return padArray(vector);
}

//Check Euclidean distance
const checkDistance = (v1,v2)=>{
    let sumOfSquares = 0;
    for (let i = 0; i < v1.length; i++) {
        const difference = v1[i] - v2[i];
        sumOfSquares += difference * difference;
    }

    return Math.sqrt(sumOfSquares);
}

// Connect to the PostgreSQL database and create table
const search_a_match = async (querystr)=>{
  const newvec = vectorize(querystr);
  await client.connect();
  const { rows } = await client.query(`SELECT * FROM mynewsentences`)
  for (let row of rows) {
    console.log(row.sentence);
    console.log(checkDistance(row.embedding, newvec))
  }
    return;
}

search_a_match("What is the horse doing??").then(()=>{
    console.log("Done");
    process.exit();
})