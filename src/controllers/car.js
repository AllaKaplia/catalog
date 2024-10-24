const Car = require("../models/Car");

const getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.carId).populate('category');
        if (!car) {
            return res.status(404).send('Car not found');
        }
        res.render('car', { car });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getCarById
};
