const fs = require('fs');
const { MongoClient, GridFSBucket } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'Autiembrace';

const client = new MongoClient(url);
async function downloadVideo() {
  try {
    // Connect to the MongoDB server
    if (!client.isConnected()) {
      await client.connect();
    }
    
    // Get the database and GridFSBucket instance
    const db = client.db(dbName);
    const bucket = new GridFSBucket(db);

    // Create a writable stream to a file where the video will be saved
    const downloadStream = fs.createWriteStream('downloadedVideo.mp4');

    try {
      // Open a download stream from GridFS
      const videoStream = bucket.openDownloadStreamByName('video.mp4');

      // Pipe the download stream to the file stream
      videoStream.pipe(downloadStream).on('error', (error) => {
        console.error('Error downloading video:', error);
      }).on('finish', () => {
        console.log('Video downloaded successfully');
      });
    } catch (error) {
      console.error('Error opening download stream:', error);
    }

  } catch (error) {
    console.error('Error during download:', error);
  } finally {
    // Close the MongoDB client connection
    if (client.isConnected()) {
      await client.close();
    }
  }
}

downloadVideo();
