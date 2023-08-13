const {generateException} = require("../scripts/exceptionScript");
const Question = require('./../models/question')

const dellQuestion = async (req, res) => {
    try {
        const _id = req.params.id
        await Question.findByIdAndRemove(_id)
        res.json(generateException('message', 'Успех'))
    } catch (e) {
        res.status(400).json(generateException('error', 'В доступе отказано'))
    }
}

module.exports = dellQuestion