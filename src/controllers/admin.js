const Car = require("../models/Car");
const Category = require("../models/Category");

const loginAdmin = (req, res) => {
    res.render('admin/login');
};

const authAdmin = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        req.session.isAdmin = true;
        res.redirect('/admin/cars');
    } else {
        res.redirect('/admin/login');
    }
};

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find().populate('category');
        const categories = await Category.find();
        res.render('admin/cars', { cars, categories });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

const getAddCar = async (req, res) => {
    try {
        const categories = await Category.find();
        res.render('admin/addCar', { categories });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

const createNewCar = async (req, res) => {
    try {
        const { name, description, price, color, category } = req.body;
        const newCar = new Car({ name, description, price, color, category });
        await newCar.save();
        res.redirect('/admin/cars');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

const updateCar = async (req, res) => {
    try {
        const { name, description, price, color, category } = req.body;
        await Car.findByIdAndUpdate(req.params.id, { name, description, price, color, category });
        res.redirect('/admin/cars');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getAllCars,
    loginAdmin,
    authAdmin,
    createNewCar,
    updateCar,
    getAddCar,
};
