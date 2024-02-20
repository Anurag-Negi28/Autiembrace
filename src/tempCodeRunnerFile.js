const fs = require('fs');
const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'myproject';

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();

    await client.db(dbName).command({ ping:  1 });
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    const bucket = new mongodb.GridFSBucket(db);

    const videoStream = fs.createReadStream('public/embraceYourself.mp4');

    const uploadStream = bucket.openUploadStream('video.mp4');

    videoStream.pipe(uploadStream).on('error', (error) => {
      console.error('Error uploading video:', error);
    }).on('finish', () => {
      console.log('Video uploaded successfully');
    });

  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

run().catch(console.dir);
