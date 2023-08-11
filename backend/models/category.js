const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
})

CategorySchema.plugin(uniqueValidator)

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category