const { client, ObjectId } = require('./db');

async function getQuoteById(req, res) {
  const id = req.params.id;
  try {
    const database = client.db('Autiembrace');
    console.log("Collections:", await database.listCollections().toArray());
    const quotesCollection = database.collection('Quotes Database'); 
    const query = { "_id": new ObjectId(id) };
    console.log('Executing query:', query);
    const quote = await quotesCollection.findOne(query);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404).send({ error: 'Quote not found.' });
    }
  } catch (error) {
    console.error('Error retrieving quote:', error);
    res.status(500).send({ error: 'An error occurred while retrieving the quote.' });
  }
}

module.exports = { getQuoteById };
