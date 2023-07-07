const express = require('express');
const router = express.Router();
const devApiControllers = require('../controllers/developer-api.controllers.js');

// fetch balance
router.get('/get-balance', devApiControllers.getUserBalance);
router.get('/limits', devApiControllers.totalNumbers);
router.get('/get-number', devApiControllers.requestNumber);

module.exports = router;