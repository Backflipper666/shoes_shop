const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true, maxLength: 500 },
});

module.exports = mongoose.model('Season', SeasonSchema);