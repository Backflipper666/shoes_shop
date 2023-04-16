const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
});

module.exports = mongoose.model('Season', SeasonSchema);
