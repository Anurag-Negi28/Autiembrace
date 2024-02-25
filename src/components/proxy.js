const express = require('express');
const axios = require('axios');

const app = express();

app.use('/model', async (req, res) => {
    const url = 'https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1/model.json?tfjs-format=file';
    try {
      const response = await axios.get(url, { responseType: 'stream' });
      // Set CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      // Pipe the response data to the client
      response.data.pipe(res);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching model');
    }
  });
  
  

app.listen(3001, () => {
  console.log('Server-side proxy running on http://localhost:3001');
});
