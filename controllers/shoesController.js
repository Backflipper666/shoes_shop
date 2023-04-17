const Shoes = require('../models/shoes');
const Countries = require('../models/country');
const Brand = require('../models/brand');

const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');

exports.index = asyncHandler(async (req, res, next) => {
  const [numShoes, numCountries, numBrand, numPrice] = await Promise.all([
    Shoes.countDocuments({}).exec(),
    Countries.countDocuments({}).exec(),
    Brand.countDocuments({}).exec(),
  ]);

  res.render('index', {
    title: 'Shoes Store Homepage',
    shoes_count: numShoes,
    country_count: numCountries,
    brand_count: numBrand,
  });
});

exports.shoes_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Shoes list');
});

exports.shoes_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Shoes detail: ${req.params.id}`);
});

exports.shoes_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Shoes create GET');
});

exports.shoes_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Shoes create POST');
});

exports.shoes_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Shoes delete GET');
});

exports.shoes_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Shoes delete POST');
});

exports.shoes_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Shoes update GET');
});

exports.shoes_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Shoes update POST');
});
