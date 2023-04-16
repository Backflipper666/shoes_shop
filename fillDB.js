const mongoose = require('mongoose');
const Brand = require('./models/brand');
const Size = require('./models/size');
const Season = require('./models/season');
const Country = require('./models/country');
const Gender = require('./models/gender');
const PriceRange = require('./models/priceRange');

mongoose.connect(
  'mongodb+srv://illicityvice:Jumper326@cluster0.dcafohp.mongodb.net/shoes_shop?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('Connected to database');

  // Create sample data for the Brand model
  const brandData = [
    { name: 'Nike' },
    { name: 'Adidas' },
    { name: 'Under Armour' },
    { name: 'Puma' },
    { name: 'Reebok' },
    { name: 'New Balance' },
    { name: 'Asics' },
    { name: 'Fila' },
    { name: 'Converse' },
    { name: 'Vans' },
    { name: 'Sketchers' },
  ];

  //   await Brand.insertMany(brandData);

  // Create sample data for the Size model
  const sizeData = [
    { name: 'XS' },
    { name: 'S' },
    { name: 'M' },
    { name: 'L' },
    { name: 'XL' },
    { name: 'XXL' },
  ];
  //   await Size.insertMany(sizeData);

  // Create sample data for the Season model
  const seasonData = [
    { name: 'spring' },
    { name: 'summer' },
    { name: 'fall' },
    { name: 'winter' },
  ];
  //   await Season.insertMany(seasonData);

  // Create sample data for the Country model
  const countryData = [
    { name: 'United States' },
    { name: 'Canada' },
    { name: 'Mexico' },
    { name: 'France' },
    { name: 'Germany' },
    { name: 'Italy' },
    { name: 'Spain' },
    { name: 'China' },
    { name: 'Japan' },
    { name: 'Australia' },
    { name: 'Brazil' },
    { name: 'Argentina' },
  ];

  await Country.insertMany(countryData);

  // Create sample data for the Gender model
  const genderData = [
    { name: 'Men' },
    { name: 'Women' },
    { name: 'Unisex' },
    { name: 'Kids' },
  ];
  //   await Gender.insertMany(genderData);

  // Create sample data for the PriceRange model
  const priceRangeData = [
    { name: '$0 - $50' },
    { name: '$50 - $100' },
    { name: '$100 - $200' },
    { name: '$200+' },
  ];
  //   await PriceRange.insertMany(priceRangeData);
  // Remove existing countries with the same names as those in countryData
  //   await Country.deleteMany({ name: { $in: countryData.map((c) => c.name) } });

  console.log('Sample data inserted successfully');
  mongoose.connection.close();
});
