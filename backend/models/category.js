const mongoose = require('mongoose')
<<<<<<< HEAD
const uniqueValidator = require('mongoose-unique-validator')

=======
>>>>>>> 7969a4b02ee6d5ccb5464fcb88dce7df81ce3b95
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true,
<<<<<<< HEAD
        required: true
    }
})

CategorySchema.plugin(uniqueValidator)

=======
        require: true
    }
})

>>>>>>> 7969a4b02ee6d5ccb5464fcb88dce7df81ce3b95
const Category = mongoose.model('Category', CategorySchema)

module.exports = Category