const express = require('express');
const router = express.Router();

const shoes_controller = require('../controllers/shoesController');
const brand_controller = require('../controllers/brandController');
const country_controller = require('../controllers/countryController');
const gender_controller = require('../controllers/genderController');
const price_controller = require('../controllers/priceRangeController');
const season_controller = require('../controllers/seasonController');
const size_controller = require('../controllers/sizeController');
const style_controller = require('../controllers/styleController');

//shoes routes
router.get('/', shoes_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/shoes/create', shoes_controller.shoes_create_get);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/shoes/create', shoes_controller.shoes_create_get);

// GET request to delete Shoes.
router.get('/shoes/:id/delete', shoes_controller.shoes_delete_get);

// POST request to delete Shoes.
router.post('/shoes/:id/delete', shoes_controller.shoes_delete_post);

// GET request to update Shoes.
router.get('/shoes/:id/update', shoes_controller.shoes_update_get);

// POST request to update Shoes.
router.post('/shoes/:id/update', shoes_controller.shoes_update_post);

// GET request for one Shoes.
router.get('/shoes/:id', shoes_controller.shoes_detail);

// GET request for list of all Shoes items.
router.get('/shoes', shoes_controller.shoes_list);

/// BRAND ROUTES ///

// GET request for creating Brand. NOTE This must come before route for id (i.e. display brand).
router.get('/brand/create', brand_controller.brand_create_get);

// POST request for creating Brand.
router.post('/brand/create', brand_controller.brand_create_post);

// GET request to delete Brand.
router.get('/brand/:id/delete', brand_controller.brand_delete_get);

// POST request to delete Brand.
router.post('/brand/:id/delete', brand_controller.brand_delete_post);

// GET request to update Brand.
router.get('/brand/:id/update', brand_controller.brand_update_get);

// POST request to update Brand.
router.post('/brand/:id/update', brand_controller.brand_update_post);

// GET request for one Brand.
router.get('/brand/:id', brand_controller.brand_detail);

// GET request for list of all Brands.
router.get('/brands', brand_controller.brand_list);

// SIZE ROUTES ///

// GET request for creating Size. NOTE This must come before route for id (i.e. display size).
router.get('/size/create', size_controller.size_create_get);

// POST request for creating Size.
router.post('/size/create', size_controller.size_create_post);

// GET request to delete Size.
router.get('/size/:id/delete', size_controller.size_delete_get);

// POST request to delete Size.
router.post('/size/:id/delete', size_controller.size_delete_post);

// GET request to update Size.
router.get('/size/:id/update', size_controller.size_update_get);

// POST request to update Size.
router.post('/size/:id/update', size_controller.size_update_post);

// GET request for one Size.
router.get('/size/:id', size_controller.size_detail);

// GET request for list of all Sizes.
router.get('/sizes', size_controller.size_list);

// AUTHOR ROUTES ///

/// COUNTRY ROUTES ///

// GET request for creating Country. NOTE This must come before route for id (i.e. display country).
router.get('/country/create', country_controller.country_create_get);

// POST request for creating Country.
router.post('/country/create', country_controller.country_create_post);

// GET request to delete Country.
router.get('/country/:id/delete', country_controller.country_delete_get);

// POST request to delete Country.
router.post('/country/:id/delete', country_controller.country_delete_post);

// GET request to update Country.
router.get('/country/:id/update', country_controller.country_update_get);

// POST request to update Country.
router.post('/country/:id/update', country_controller.country_update_post);

// GET request for one Country.
router.get('/country/:id', country_controller.country_detail);

// GET request for list of all Countries.
router.get('/countries', country_controller.country_list);

// SEASON ROUTES ///

// GET request for creating Season. NOTE This must come before route for id (i.e. display season).
router.get('/season/create', season_controller.season_create_get);

// POST request for creating Season.
router.post('/season/create', season_controller.season_create_post);

// GET request to delete Season.
router.get('/season/:id/delete', season_controller.season_delete_get);

// POST request to delete Season.
router.post('/season/:id/delete', season_controller.season_delete_post);

// GET request to update Season.
router.get('/season/:id/update', season_controller.season_update_get);

// POST request to update Season.
router.post('/season/:id/update', season_controller.season_update_post);

// GET request for one Season.
router.get('/season/:id', season_controller.season_detail);

// GET request for list of all Seasons.
router.get('/seasons', season_controller.season_list);

/// GENDER ROUTES ///

// GET request for creating Gender. NOTE This must come before route for id (i.e. display gender).
router.get('/gender/create', gender_controller.gender_create_get);

// POST request for creating Gender.
router.post('/gender/create', gender_controller.gender_create_post);

// GET request to delete Gender.
router.get('/gender/:id/delete', gender_controller.gender_delete_get);

// POST request to delete Gender.
router.post('/gender/:id/delete', gender_controller.gender_delete_post);

// GET request to update Gender.
router.get('/gender/:id/update', gender_controller.gender_update_get);

// POST request to update Gender.
router.post('/gender/:id/update', gender_controller.gender_update_post);

// GET request for one Gender.
router.get('/gender/:id', gender_controller.gender_detail);

// GET request for list of all Genders.
router.get('/genders', gender_controller.gender_list);

/// PRICE RANGE ROUTES ///

// GET request for creating Price. NOTE This must come before route for id (i.e. display price).
router.get('/price/create', price_controller.price_create_get);

// POST request for creating Price.
router.post('/price/create', price_controller.price_create_post);

// GET request to delete Price.
router.get('/price/:id/delete', price_controller.price_delete_get);

// POST request to delete Price.
router.post('/price/:id/delete', price_controller.price_delete_post);

// GET request to update Price.
router.get('/price/:id/update', price_controller.price_update_get);

// POST request to update Price.
router.post('/price/:id/update', price_controller.price_update_post);

// GET request for one Price.
router.get('/price/:id', price_controller.price_detail);

// GET request for list of all Prices.
router.get('/prices', price_controller.price_list);

/// STYLE ROUTES ///

// GET request for creating Style. NOTE This must come before route for id (i.e. display style).
router.get('/style/create', style_controller.style_create_get);

// POST request for creating Style.
router.post('/style/create', style_controller.style_create_post);

// GET request to delete Style.
router.get('/style/:id/delete', style_controller.style_delete_get);

// POST request to delete Style.
router.post('/style/:id/delete', style_controller.style_delete_post);

// GET request to update Style.
router.get('/style/:id/update', style_controller.style_update_get);

// POST request to update Style.
router.post('/style/:id/update', style_controller.style_update_post);

// GET request for one Style.
router.get('/style/:id', style_controller.style_detail);

// GET request for list of all Styles.
router.get('/styles', style_controller.style_list);

module.exports = router;
