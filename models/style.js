const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StyleSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
});

// Virtual for style's URL
StyleSchema.virtual('url').get(function () {
  return `/inventory/style/${this._id}`;
});

// Export model
module.exports = mongoose.model('Style', StyleSchema);
