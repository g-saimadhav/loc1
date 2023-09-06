require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrllocation = require('../controllers/location');
var ctrlothers = require('../controllers/others');

/* GET Locations page */
router.get('/', ctrllocation.homelist);
router.get('/location', ctrllocation.locationInfo);
router.get('/location/review/new', ctrllocation.addReview);

/*GET others page */
router.get('/about', ctrlothers.about);

router.get('/signin', ctrlothers.signin);

router.get('/register', ctrlothers.register);

module.exports = router;

require('dotenv').config();
const port = process.env.PORT || 3000;
