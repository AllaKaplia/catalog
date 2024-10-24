const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    name: String,
    price: Number,
    color: String,
    image: String,
    description: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Car', CarSchema);
