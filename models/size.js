const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SizeSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
});

// Export model
module.exports = mongoose.model('Size', SizeSchema);
