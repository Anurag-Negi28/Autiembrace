const express = require('express');
const app = express();
const cors = require('cors');
const dbRoutes = require('./quoteRoute');
const { connect } = require('./db');


app.use(express.json());
app.use(cors());
app.use('/', dbRoutes);

const PORT = process.env.PORT ||  3002;
connect().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
