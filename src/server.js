const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(3000);
    console.log('Database connection successful');
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
