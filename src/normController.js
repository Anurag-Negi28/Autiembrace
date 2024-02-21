const { client, ObjectId } = require('./dbNorm');
async function getSocialNormById(req, res) {
  const id = req.params.id;
  try {
    const database = client.db('Autiembrace');
    console.log("Collections:", await database.listCollections().toArray());
    const socialNormsCollection = database.collection('Social Norms');
    const query = { "_id": new ObjectId(id) };
    console.log('Executing query:', query);
    const socialNorm = await socialNormsCollection.findOne(query);
    if (socialNorm) {
      res.json(socialNorm);
    } else {
      res.status(404).send({ error: 'Social norm not found.' });
    }
  } catch (error) {
    console.error('Error retrieving social norm:', error);
    res.status(500).send({ error: 'An error occurred while retrieving the social norm.' });
  }
}

module.exports = { getSocialNormById };
