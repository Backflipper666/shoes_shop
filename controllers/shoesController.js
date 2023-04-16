const asyncHandler = require('express-async-handler');
const Shoes = require('../models/shoes');

exports.index = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Site Home Page');
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
