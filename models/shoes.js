const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
  brand: { type: String, required: true, maxlength: 100 },
  name: { type: String, required: true, maxlength: 100 },
  price: { type: Number, required: true },
  country: { type: String, required: true, maxlength: 50 },
  gender: { type: String, enum: ['male', 'female', 'unisex'], required: true },
  season: {
    type: String,
    enum: ['summer', 'spring', 'winter', 'autumn'],
    required: true,
    maxlength: 50,
  },
  style: { type: String, required: true, maxlength: 50 },
});

// Virtual for shoe's URL
ShoeSchema.virtual('url').get(function () {
  return '/shoe/' + this._id;
});

// Export model
module.exports = mongoose.model('Shoe', ShoeSchema);
