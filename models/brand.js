const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, maxLength: 1000 },
  country_of_origin: { type: String, maxLength: 100 },
  website: { type: String, maxLength: 100 },
});

// Virtual for author's full name
BrandSchema.virtual('name').get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let name = '';
  if (this.name) {
    name = `${this.name}`;
  }
  if (!this.name) {
    name = '';
  }
  return name;
});

// Virtual for author's URL
BrandSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/brand/${this._id}`;
});

// Export model
module.exports = mongoose.model('Brand', BrandSchema);
