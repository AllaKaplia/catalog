const Car = require("../models/Car");
const Category = require("../models/Category");

const getAllCarsAndCategories = async (req, res) => {
    const categories = await Category.find();
    const cars = await Car.find().populate('category');
    res.render('index', { categories, cars });
};

module.exports = {
    getAllCarsAndCategories,
};
