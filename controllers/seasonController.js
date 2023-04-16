const Season = require('../models/season');
const asyncHandler = require('express-async-handler');

// Display list of all seasons.
exports.season_list = asyncHandler(async (req, res, next) => {
  const season_list = await Season.find();
  res.render('season_list', { title: 'Season List', season_list });
});

// Display detail page for a specific season.
exports.season_detail = asyncHandler(async (req, res, next) => {
  const season = await Season.findById(req.params.id);
  res.render('season_detail', { title: 'Season Detail', season });
});

// Display season create form on GET.
exports.season_create_get = asyncHandler(async (req, res, next) => {
  res.render('season_form', { title: 'Create Season' });
});

// Handle season create on POST.
exports.season_create_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  const season = new Season({ name });
  await season.save();
  res.redirect(season.url);
});

// Display season delete form on GET.
exports.season_delete_get = asyncHandler(async (req, res, next) => {
  const season = await Season.findById(req.params.id);
  res.render('season_delete', { title: 'Delete Season', season });
});

// Handle season delete on POST.
exports.season_delete_post = asyncHandler(async (req, res, next) => {
  await Season.findByIdAndDelete(req.params.id);
  res.redirect('/seasons');
});

// Display season update form on GET.
exports.season_update_get = asyncHandler(async (req, res, next) => {
  const season = await Season.findById(req.params.id);
  res.render('season_form', { title: 'Update Season', season });
});

// Handle season update on POST.
exports.season_update_post = asyncHandler(async (req, res, next) => {
  const { name } = req.body;
  await Season.findByIdAndUpdate(req.params.id, { name });
  res.redirect(req.params.id);
});
