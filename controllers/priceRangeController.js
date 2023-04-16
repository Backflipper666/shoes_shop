const price = require('../models/price');
const asyncHandler = require('express-async-handler');

// Display list of all prices.
exports.price_list = asyncHandler(async (req, res, next) => {
  const prices = await price.find();
  res.render('price_list', { title: 'Price List', prices });
});

// Display detail page for a specific price.
exports.price_detail = asyncHandler(async (req, res, next) => {
  const price = await price.findById(req.params.id);
  res.render('price_detail', { title: 'Price Detail', price });
});

// Display Price create form on GET.
exports.price_create_get = asyncHandler(async (req, res, next) => {
  res.render('price_form', { title: 'Create Price' });
});

// Handle Price create on POST.
exports.price_create_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  const price = new price({ name });
  await price.save();

  res.redirect(price.url);
});

// Display Price delete form on GET.
exports.price_delete_get = asyncHandler(async (req, res, next) => {
  const price = await price.findById(req.params.id);
  res.render('price_delete', { title: 'Delete Price', price });
});

// Handle Price delete on POST.
exports.price_delete_post = asyncHandler(async (req, res, next) => {
  await price.findByIdAndDelete(req.body.priceId);
  res.redirect('/prices');
});

// Display Price update form on GET.
exports.price_update_get = asyncHandler(async (req, res, next) => {
  const price = await price.findById(req.params.id);
  res.render('price_form', { title: 'Update Price', price });
});

// Handle Price update on POST.
exports.price_update_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;

  const price = await price.findByIdAndUpdate(req.params.id, {
    name,
  });
  res.redirect(price.url);
});
