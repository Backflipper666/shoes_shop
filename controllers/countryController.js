const Country = require('../models/country');
const asyncHandler = require('express-async-handler');

// Display list of all countries.
exports.country_list = asyncHandler(async (req, res, next) => {
  const countryList = await Country.find({});
  res.render('country_list', { title: 'Country List', countryList });
});

// Display detail page for a specific country.
exports.country_detail = asyncHandler(async (req, res, next) => {
  const country = await Country.findById(req.params.id);
  if (!country) {
    const err = new Error('Country not found');
    err.status = 404;
    return next(err);
  }
  res.render('country_detail', { title: 'Country Detail', country });
});

// Display country create form on GET.
exports.country_create_get = asyncHandler(async (req, res, next) => {
  res.render('country_form', { title: 'Create Country' });
});

// Handle country create on POST.
exports.country_create_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const country = new Country({ name });
  try {
    await country.save();
    res.redirect(country.url);
  } catch (err) {
    return next(err);
  }
});

// Display country delete form on GET.
exports.country_delete_get = asyncHandler(async (req, res, next) => {
  const country = await Country.findById(req.params.id);
  if (!country) {
    const err = new Error('Country not found');
    err.status = 404;
    return next(err);
  }
  res.render('country_delete', { title: 'Delete Country', country });
});

// Handle country delete on POST.
exports.country_delete_post = asyncHandler(async (req, res, next) => {
  const country = await Country.findById(req.params.id);
  if (!country) {
    const err = new Error('Country not found');
    err.status = 404;
    return next(err);
  }
  try {
    await Country.findByIdAndRemove(req.body.countryid);
    res.redirect('/catalog/countries');
  } catch (err) {
    return next(err);
  }
});

// Display country update form on GET.
exports.country_update_get = asyncHandler(async (req, res, next) => {
  const country = await Country.findById(req.params.id);
  if (!country) {
    const err = new Error('Country not found');
    err.status = 404;
    return next(err);
  }
  res.render('country_form', { title: 'Update Country', country });
});

// Handle country update on POST.
exports.country_update_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const country = new Country({ name, _id: req.params.id });
  try {
    await Country.findByIdAndUpdate(req.params.id, country, {});
    res.redirect(country.url);
  } catch (err) {
    return next(err);
  }
});
