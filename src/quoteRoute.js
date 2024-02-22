const express = require('express');
const router = express.Router();
const { getQuoteById } = require('./quoteController');
const { client } = require('./db');

router.get('/api/quotes/random', async (req, res) => {
  try {
    const database = client.db('Autiembrace');
    console.log("Collections:", await database.listCollections().toArray()); 
    const quotesCollection = database.collection('Quotes Database'); 
    const count = await quotesCollection.countDocuments();
    console.log('Total quotes:', count);
    const randomIndex = Math.floor(Math.random() * count);
    console.log('Random index:', randomIndex);
    const randomQuote = await quotesCollection.find().skip(randomIndex).limit(1).toArray();
    console.log('Random quote:', randomQuote);
    res.json(randomQuote[0]);
  } catch (error) {
    console.error('Error fetching random quote:', error);
    res.status(500).send({ error: 'An error occurred while fetching a random quote.' });
  }
});
router.get('/api/quotes/:id', getQuoteById);

module.exports = router;
