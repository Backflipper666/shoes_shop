const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenderSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: ['Men', 'Women', 'Unisex', 'Kids'],
  },
});

module.exports = mongoose.model('Gender', GenderSchema);
