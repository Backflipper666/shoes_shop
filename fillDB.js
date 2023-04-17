const uri = require('./uri');
const mongoose = require('mongoose');
const Shoes = require('./models/shoes');
const Brand = require('./models/brand');
const Size = require('./models/size');
const Season = require('./models/season');
const Country = require('./models/country');
const Gender = require('./models/gender');
const PriceRange = require('./models/price');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
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

  // await Country.insertMany(countryData);

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

  const shoes1 = [
    {
      brand: 'Nike',
      name: 'Air Max 90',
      price: 120,
      country: 'United States',
      gender: 'male',
      season: 'autumn',
      style: 'casual',
    },
    {
      brand: 'Adidas',
      name: 'Superstar',
      price: 100,
      country: 'Germany',
      gender: 'female',
      season: 'spring',
      style: 'athletic',
    },
    {
      brand: 'Under Armour',
      name: 'Charged Pursuit 2',
      price: 80,
      country: 'United States',
      gender: 'unisex',
      season: 'summer',
      style: 'running',
    },
    {
      brand: 'Puma',
      name: 'Suede Classic',
      price: 70,
      country: 'Germany',
      gender: 'male',
      season: 'spring',
      style: 'casual',
    },
    {
      brand: 'Reebok',
      name: 'Classic Leather',
      price: 90,
      country: 'United States',
      gender: 'female',
      season: 'autumn',
      style: 'athletic',
    },
    {
      brand: 'New Balance',
      name: '574',
      price: 80,
      country: 'United States',
      gender: 'unisex',
      season: 'spring',
      style: 'casual',
    },
    {
      brand: 'Asics',
      name: 'Gel-Kayano 28',
      price: 160,
      country: 'Japan',
      gender: 'male',
      season: 'summer',
      style: 'running',
    },
    {
      brand: 'Fila',
      name: 'Disruptor II',
      price: 65,
      country: 'Italy',
      gender: 'female',
      season: 'autumn',
      style: 'casual',
    },
    {
      brand: 'Converse',
      name: 'Chuck Taylor All Star',
      price: 55,
      country: 'United States',
      gender: 'unisex',
      season: 'spring',
      style: 'casual',
    },
    {
      brand: 'Vans',
      name: 'Old Skool',
      price: 65,
      country: 'United States',
      gender: 'male',
      season: 'summer',
      style: 'casual',
    },
  ];

  //get name of shoes.brand
  //find the _id of brand document in brands collection with the corresponding name
  //run the updateOne query to change brand field of a shoes document

  const { _id: brandId, name } = await Brand.findOne({ name: 'Vans' });
  console.log(brandId, 'name is: ', name);

  const shoes2 = {
    brand: brandId,
    name: 'Old Skool',
    price: 65,
    country: 'United States',
    gender: 'male',
    season: 'summer',
    style: 'casual',
  };
  // await Shoes.create(shoes2);
  //   await PriceRange.insertMany(priceRangeData);
  // Remove existing countries with the same names as those in countryData
  //   await Country.deleteMany({ name: { $in: countryData.map((c) => c.name) } });
  async function fillDB() {
    try {
      const brands = await Brand.find({}, '_id name'); // retrieve the _id and name fields of all brands

      const shoes = shoes1.map((shoe) => {
        const brand = brands.find((brand) => brand.name === shoe.brand);
        return { ...shoe, brand: brand._id };
      });

      await Shoes.create(shoes);
      console.log('Shoes collection populated');
    } catch (err) {
      console.error(err);
    } finally {
      mongoose.connection.close();
    }
  }

  // fillDB();

  console.log('Sample data inserted successfully');
  mongoose.connection.close();
});
