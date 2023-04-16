const asyncHandler = require('express-async-handler');
const Gender = require('../models/gender');

// Display list of all genders.
exports.gender_list = asyncHandler(async (req, res, next) => {
  const genders = await Gender.find();
  res.render('gender_list', { title: 'Genders', gender_list: genders });
});

// Display detail page for a specific gender.
exports.gender_detail = asyncHandler(async (req, res, next) => {
  const gender = await Gender.findById(req.params.id);
  res.render('gender_detail', { title: 'Gender Detail', gender });
});

// Display Gender create form on GET.
exports.gender_create_get = asyncHandler(async (req, res, next) => {
  res.render('gender_form', { title: 'Create Gender' });
});

// Handle Gender create on POST.
exports.gender_create_post = asyncHandler(async (req, res, next) => {
  const gender = new Gender({ name: req.body.name });
  await gender.save();
  res.redirect(gender.url);
});

// Display Gender delete form on GET.
exports.gender_delete_get = asyncHandler(async (req, res, next) => {
  const gender = await Gender.findById(req.params.id);
  res.render('gender_delete', { title: 'Delete Gender', gender });
});

// Handle Gender delete on POST.
exports.gender_delete_post = asyncHandler(async (req, res, next) => {
  await Gender.findByIdAndRemove(req.body.genderid);
  res.redirect('/inventory/genders');
});

// Display Gender update form on GET.
exports.gender_update_get = asyncHandler(async (req, res, next) => {
  const gender = await Gender.findById(req.params.id);
  res.render('gender_form', { title: 'Update Gender', gender });
});

// Handle Gender update on POST.
exports.gender_update_post = asyncHandler(async (req, res, next) => {
  const gender = await Gender.findById(req.params.id);
  gender.name = req.body.name;
  await gender.save();
  res.redirect(gender.url);
});
