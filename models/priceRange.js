const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PriceRangeSchema = new Schema({
  name: { type: String, required: true },
});

// Export model
module.exports = mongoose.model('PriceRange', PriceRangeSchema);
