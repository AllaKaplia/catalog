const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/category');

router.get('/:categoryId', ctrl.getCategoryById);
router.get('/:categoryId/:carId', ctrl.getCarByIdFromCategory);

module.exports = router;
