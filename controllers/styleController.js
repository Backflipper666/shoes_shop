const Style = require('../models/style');
const asyncHandler = require('express-async-handler');

// Display list of all Styles.
exports.style_list = asyncHandler(async (req, res, next) => {
  const styles = await Style.find().sort('name');
  res.render('style_list', { title: 'Style List', styles });
});

// Display detail page for a specific Style.
exports.style_detail = asyncHandler(async (req, res, next) => {
  const style = await Style.findById(req.params.id);
  if (!style) {
    const err = new Error('Style not found');
    err.status = 404;
    return next(err);
  }
  res.render('style_detail', { title: 'Style Detail', style });
});

// Display Style create form on GET.
exports.style_create_get = asyncHandler(async (req, res, next) => {
  res.render('style_form', { title: 'Create Style' });
});

// Handle Style create on POST.
exports.style_create_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const style = new Style({ name });
  await style.save();
  res.redirect(style.url);
});

// Display Style delete form on GET.
exports.style_delete_get = asyncHandler(async (req, res, next) => {
  const style = await Style.findById(req.params.id);
  if (!style) {
    const err = new Error('Style not found');
    err.status = 404;
    return next(err);
  }
  res.render('style_delete', { title: 'Delete Style', style });
});

// Handle Style delete on POST.
exports.style_delete_post = asyncHandler(async (req, res, next) => {
  const style = await Style.findByIdAndDelete(req.body.styleid);
  res.redirect('/styles');
});

// Display Style update form on GET.
exports.style_update_get = asyncHandler(async (req, res, next) => {
  const style = await Style.findById(req.params.id);
  if (!style) {
    const err = new Error('Style not found');
    err.status = 404;
    return next(err);
  }
  res.render('style_form', { title: 'Update Style', style });
});

// Handle Style update on POST.
exports.style_update_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const style = await Style.findByIdAndUpdate(req.params.id, { name });
  res.redirect(style.url);
});
