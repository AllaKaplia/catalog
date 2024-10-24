const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
    description: String,
    image: String,
    parent: { type: Schema.Types.ObjectId, ref: 'Category' }
});

module.exports = mongoose.model('Category', CategorySchema);
