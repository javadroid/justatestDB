const express = require('express');
const router = express.Router();
const devApiControllers = require('../controllers/developer-api.controllers.js');

// fetch balance
router.get('/get-balance', devApiControllers.getUserBalance);
router.get('/limits', devApiControllers.totalNumbers);
router.get('/get-number', devApiControllers.requestNumber);
router.get('/get-sms', devApiControllers.getSMS);
router.get('/get-status', devApiControllers.getStatus);
router.get('/get-prices', devApiControllers.getPrices);
router.get('/countries', devApiControllers.getCountries);
router.get('/applications', devApiControllers.getServices);

module.exports = router;