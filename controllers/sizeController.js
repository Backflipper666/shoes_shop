const Size = require('../models/size');
const asyncHandler = require('express-async-handler');

// Display list of all Sizes.
exports.size_list = asyncHandler(async (req, res, next) => {
  const size_list = await Size.find().exec();
  res.render('size_list', { title: 'Size List', size_list });
});

// Display detail page for a specific Size.
exports.size_detail = asyncHandler(async (req, res, next) => {
  const size = await Size.findById(req.params.id).exec();
  if (size == null) {
    const err = new Error('Size not found');
    err.status = 404;
    return next(err);
  }
  res.render('size_detail', { title: 'Size Detail', size });
});

// Display Size create form on GET.
exports.size_create_get = asyncHandler(async (req, res, next) => {
  res.render('size_form', { title: 'Create Size' });
});

// Handle Size create on POST.
exports.size_create_post = asyncHandler(async (req, res, next) => {
  const size = new Size({ name: req.body.name });

  try {
    const savedSize = await size.save();
    res.redirect(savedSize.url);
  } catch (err) {
    return next(err);
  }
});

// Display Size delete form on GET.
exports.size_delete_get = asyncHandler(async (req, res, next) => {
  const size = await Size.findById(req.params.id).exec();
  if (size == null) {
    const err = new Error('Size not found');
    err.status = 404;
    return next(err);
  }
  res.render('size_delete', { title: 'Delete Size', size });
});

// Handle Size delete on POST.
exports.size_delete_post = asyncHandler(async (req, res, next) => {
  const size = await Size.findById(req.params.id).exec();
  if (size == null) {
    const err = new Error('Size not found');
    err.status = 404;
    return next(err);
  }
  try {
    await Size.findByIdAndRemove(req.body.id);
    res.redirect('/catalog/sizes');
  } catch (err) {
    return next(err);
  }
});

// Display Size update form on GET.
exports.size_update_get = asyncHandler(async (req, res, next) => {
  const size = await Size.findById(req.params.id).exec();
  if (size == null) {
    const err = new Error('Size not found');
    err.status = 404;
    return next(err);
  }
  res.render('size_form', { title: 'Update Size', size });
});

// Handle Size update on POST.
exports.size_update_post = asyncHandler(async (req, res, next) => {
  const size = new Size({
    _id: req.params.id,
    name: req.body.name,
  });

  try {
    await Size.findByIdAndUpdate(req.params.id, size);
    res.redirect(size.url);
  } catch (err) {
    return next(err);
  }
});
