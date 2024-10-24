const Car = require("../models/Car");
const Category = require("../models/Category");

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId).populate('parent');
        if (!category) {
            return res.status(404).send('Category not found');
        }
        const cars = await Car.find({ category: req.params.categoryId }).populate('category');
        res.render('category', { category, cars });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

const getCarByIdFromCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId).populate('parent');
        if (!category) {
            return res.status(404).send('Category not found');
        }
        const car = await Car.findById(req.params.carId).populate('category');
        if (!car) {
            return res.status(404).send('Car not found');
        }
        res.render('car', { car, category });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getCategoryById,
    getCarByIdFromCategory
};
