const Car = require("../models/Car");
const Category = require("../models/Category");

const getAllCarsAndCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        const cars = await Car.find().populate('category');
        res.render('index', { categories, cars });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllCarsAndCategories,
};
