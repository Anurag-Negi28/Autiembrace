const express = require('express');
const app = express();
const cors = require('cors');
const dbRoutes = require('./normRoute'); 
const { connect } = require('./dbNorm');

app.use(express.json());
app.use(cors());
app.use('/', dbRoutes);

const PORT = process.env.PORT ||  8082;
connect().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});