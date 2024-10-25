const { Command } = require('commander');
const fs = require('fs');
const mongoose = require('mongoose');
const Category = require('./models/Category');
const Car = require('./models/Car');

mongoose.connect('mongodb://localhost:27017/car-catalog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const program = new Command();

program
    .command('import <file>')
    .description('Import data from JSON file')
    .action(async (file) => {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

        const categories = await Category.create(data.categories);

        const categoryMap = {};
        categories.forEach(category => {
            categoryMap[category.name] = category._id;
        });

        const cars = data.cars.map(car => {
            return {
                ...car,
                category: categoryMap[car.category]
            };
        });

        await Car.create(cars);

        console.log('Data imported successfully');
        process.exit();
    });

program.parse(process.argv);
