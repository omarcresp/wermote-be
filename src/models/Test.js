const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  hola: String
});

module.exports = mongoose.model('tests', TestSchema);
