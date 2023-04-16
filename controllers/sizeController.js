const asyncHandler = require('express-async-handler');
const Size = require('../models/size');

exports.index = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Site Home Page');
});

exports.size_list = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Size list');
});

exports.size_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Size detail: ${req.params.id}`);
});

exports.size_create_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Size create GET');
});

exports.size_create_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Size create POST');
});

exports.size_delete_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Size delete GET');
});

exports.size_delete_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Size delete POST');
});

exports.size_update_get = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Size update GET');
});

exports.size_update_post = asyncHandler(async (req, res, next) => {
  res.send('NOT IMPLEMENTED: Size update POST');
});
