const fs = require('fs');
const { MongoClient, ObjectId, GridFSBucket } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'Autiembrace';

const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    await client.db(dbName).command({ ping:  1 });
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const bucket = new GridFSBucket(db);
    const videoStream = fs.createReadStream('public/embraceYourself.mp4');
    const uploadStream = bucket.openUploadStream('video.mp4');

    videoStream.pipe(uploadStream).on('error', (error) => {
      console.error('Error uploading video:', error);
      client.close();
    }).on('finish', () => {
      console.log('Video uploaded successfully');
      client.close(); 
    });

  } catch (error) {
    console.error('Error during execution:', error);
    client.close(); 
  }
}

run();
