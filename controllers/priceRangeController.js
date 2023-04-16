const PriceRange = require('../models/priceRange');
const asyncHandler = require('express-async-handler');

// Display list of all price ranges.
exports.priceRange_list = asyncHandler(async (req, res, next) => {
  const priceRanges = await PriceRange.find();
  res.render('priceRange_list', { title: 'Price Range List', priceRanges });
});

// Display detail page for a specific price range.
exports.priceRange_detail = asyncHandler(async (req, res, next) => {
  const priceRange = await PriceRange.findById(req.params.id);
  res.render('priceRange_detail', { title: 'Price Range Detail', priceRange });
});

// Display Price Range create form on GET.
exports.priceRange_create_get = asyncHandler(async (req, res, next) => {
  res.render('priceRange_form', { title: 'Create Price Range' });
});

// Handle Price Range create on POST.
exports.priceRange_create_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  const priceRange = new PriceRange({ name });
  await priceRange.save();

  res.redirect(priceRange.url);
});

// Display Price Range delete form on GET.
exports.priceRange_delete_get = asyncHandler(async (req, res, next) => {
  const priceRange = await PriceRange.findById(req.params.id);
  res.render('priceRange_delete', { title: 'Delete Price Range', priceRange });
});

// Handle Price Range delete on POST.
exports.priceRange_delete_post = asyncHandler(async (req, res, next) => {
  await PriceRange.findByIdAndDelete(req.body.priceRangeId);
  res.redirect('/price-ranges');
});

// Display Price Range update form on GET.
exports.priceRange_update_get = asyncHandler(async (req, res, next) => {
  const priceRange = await PriceRange.findById(req.params.id);
  res.render('priceRange_form', { title: 'Update Price Range', priceRange });
});

// Handle Price Range update on POST.
exports.priceRange_update_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  const priceRange = await PriceRange.findByIdAndUpdate(req.params.id, {
    name,
  });
  res.redirect(priceRange.url);
});
