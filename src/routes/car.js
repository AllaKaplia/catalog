const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/car');

router.get('/:carId', ctrl.getCarById);

module.exports = router;
