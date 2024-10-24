const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/catalog');

router.get('/', ctrl.getAllCarsAndCategories);

module.exports = router;
