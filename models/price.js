const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Price = new Schema({
  name: { type: String, required: true },
});

// Export model
module.exports = mongoose.model('Price', Price);
