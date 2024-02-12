const { MongoClient, ObjectId } = require('mongodb');
const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const adminDb = client.db().admin();
    const databasesList = await adminDb.listDatabases();
    console.log("Databases:", databasesList);
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

connect();
module.exports = { client, connect, ObjectId };
