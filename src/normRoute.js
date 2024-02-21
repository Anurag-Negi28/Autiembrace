const express = require('express');
const router = express.Router();
const { client } = require('./dbNorm'); 

const { getSocialNormById } = require('./normController');

router.get('/api/social-norms/random', async (req, res) => {
  try {
    const database = client.db('Autiembrace');
    console.log("Collections:", await database.listCollections().toArray());   
    const socialNormsCollection = database.collection('Social Norms'); 
    const count = await socialNormsCollection.countDocuments();
    console.log('Total social norms:', count);
    const randomIndex = Math.floor(Math.random() * count);
    console.log('Random index:', randomIndex);
    const randomSocialNorm = await socialNormsCollection.find().skip(randomIndex).limit(1).toArray();
    console.log('Random social norm:', randomSocialNorm);
    res.json(randomSocialNorm[0]);
  } catch (error) {
    console.error('Error fetching random social norm:', error);
    res.status(500).send({ error: 'An error occurred while fetching a random social norm.' });
  }
});

router.get('/api/social-norms/:id', getSocialNormById);

module.exports = router;
