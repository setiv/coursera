require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
require("@tensorflow/tfjs-node");
const us_encoder = require("@tensorflow-models/universal-sentence-encoder");

const { MONGO_HOST, MONGO_PORT, MONGO_USER, MONGO_PASS, MONGO_DB , MONGO_COLLECTION } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/?retryWrites=true&w=majority`;

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
        client = new MongoClient(uri, {
            serverApi: {
            version: ServerApiVersion.v1,
            strict: false,
            deprecationErrors: true,
        }
    });
        try {
            await client.connect();
            console.log('Connected to MongoDB Atlas');
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
            throw err;
        }
    }
    return client.db(MONGO_DB);
}

async function closeMongoDBConnection() {
    if (client) {
        await client.close();
        console.log('MongoDB connection closed');
        client = null;
    }
}

module.exports = { vectorizeText, connectToMongoDB, closeMongoDBConnection, MONGO_COLLECTION };