const express = require('express');
const router = express.Router();
const devApiControllers = require('../controllers/developer-api.controllers.js');

// fetch balance
router.get('/get-balance', devApiControllers.getUserBalance);



module.exports = router;