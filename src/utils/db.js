require('dotenv').config({ path: '../../.env' });

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  console.log('isConnected:', isConnected);

  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  return mongoose.connect(process.env.MONGO_URL)
    .then(db => {
      console.log('DB connected');
      isConnected = db.connections[0].readyState;
    });
};
