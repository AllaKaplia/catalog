const mongoose = require('mongoose');
const Category = require('../src/models/Category');
const Car = require('../src/models/Car');

mongoose.connect('mongodb://localhost:27017/car-catalog', { useNewUrlParser: true, useUnifiedTopology: true });

async function seed() {
    await Category.deleteMany({});
    await Car.deleteMany({});

    const category1 = await Category.create({ name: 'Category 1', description: 'Description 1' });
    const category2 = await Category.create({ name: 'Category 2', description: 'Description 2', parent: category1._id });

    await Car.create([
        { name: 'Car 1', price: 10000, color: 'Red', image: 'car1.jpg', description: 'Description 1', category: category1._id },
        { name: 'Car 2', price: 20000, color: 'Blue', image: 'car2.jpg', description: 'Description 2', category: category2._id }
    ]);

    console.log('Data seeded successfully');
    process.exit();
}

seed();
