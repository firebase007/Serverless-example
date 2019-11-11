const mongoose = require('mongoose');
require("dotenv").config();
mongoose.Promise = global.Promise;

const connectToDatabase = async () => {
  let isConnected;
  if (isConnected) {
    console.log('using existing database connection');
    return Promise.resolve();
  }

  console.log('using new database connection');
  const database = await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});
  isConnected = database.connections[0].readyState;
  // return isConnected;
};

module.exports = connectToDatabase;

