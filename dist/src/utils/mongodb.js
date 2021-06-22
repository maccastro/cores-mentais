"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongodb_1 = require("mongodb");
let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;
let cachedClient;
let cachedDb;
if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
if (!dbName) {
    throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}
async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }
    const client = await mongodb_1.MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = await client.db(dbName);
    cachedClient = client;
    cachedDb = db;
    return { client, db };
}
exports.connectToDatabase = connectToDatabase;
