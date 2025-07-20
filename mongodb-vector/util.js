require('dotenv').config();
// imports the mongodb npm package which is used to interact with mongodb from a javacript program
const {MongoClient, ServerApiVersion } = require('mongodb');
// indluding tensorflow for node.js applications, which is a javascript library for training and deploying ML models in node.js
require("@tensorflow/tfjs-node");
const us_encoder = require('@tensorflow-models/universal-sentence-encoder');

const { MONGO_HOST, MONGO_PORT, MONGO_USER, MONGO_PASS, MONGO_DB, MONGO_COLLECTION } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/retryWrites=true&w=majority`;

let client;
let model;

async function loadModel() {
    if (!model) {
        model = await us_encoder.load();
    }
}

async function vectorizeText(text) {
    await loadModel();
    const embeddingsRequest = await model.embed(text);
    const vector = embeddingsRequest.arraySync()[0];

    return vector;
}

async function connectToMongoDB() {
    if (!client) {
        client = new MongoClient(uri);
        try {
            await client.connect();
            console.log("Connected to MongoDB Atlas");

        } catch (err) {
            console.error("Error connecting to MongoDB: ", err);
            throw err;
        }
    }
    return client.db(MONGO_DB);
}

async function closeMongoDBConnection() {
    if (client) {
        await client.close();
        console.log("MongDB connection closed");
        client = null;
    }
}

module.exports = { vectorizeText, connectToMongoDB, closeMongoDBConnection, MONGO_COLLECTION };