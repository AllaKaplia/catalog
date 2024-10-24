const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/admin');
const isAdmin = require('../middleware/isAdmin');

router.get('/login', ctrl.loginAdmin);

router.get('/cars', isAdmin, ctrl.getAllCars);

router.get('/car/add', isAdmin, ctrl.getAddCar);

router.post('/car', isAdmin, ctrl.createNewCar);

router.post('/car/:id', isAdmin, ctrl.updateCar);

router.post('/login', ctrl.authAdmin);

module.exports = router;
