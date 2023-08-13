const Question = require("../models/question");
const {generateException} = require("../scripts/exceptionScript");

const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find({})

        if(questions)
            return res.json(questions)

        throw generateException('error', 'В доступе отказано')
    } catch (e) {
        return res.status(400).json(e)
    }
}

module.exports = getQuestions