require('dotenv').config({ path: '../../.env' });

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    return Promise.resolve();
  }

  return mongoose.connect(process.env.MONGO_URL)
    .then(db => {
      isConnected = db.connections[0].readyState;
    });
};
