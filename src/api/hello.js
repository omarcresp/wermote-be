'use strict';

const connectToDatabase = require('../utils/db');
const TestModel = require('../models/Test');

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return connectToDatabase()
    .then(() =>
      TestModel.findById('65e214203d430650127ea4db')
    )
    .then(test => callback(null, {
      statusCode: 200,
      body: JSON.stringify(test)
    }))
    .catch(err => callback(null, {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not get Test.'
    }));
}
