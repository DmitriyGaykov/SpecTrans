const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    }
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question