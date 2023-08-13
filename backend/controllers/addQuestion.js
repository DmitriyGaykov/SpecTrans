const {receiveErrors, generateException} = require("../scripts/exceptionScript");
const Question = require("../models/question");
const addQuestion = async (req, res) => {
    try {
        const [result, errors] = receiveErrors(req)

        if (!result.isEmpty()) {
            throw errors
        }

        const { name, phone, comment } = req.body

        const question = new Question({
            name, phone, comment
        })

        await question.save()

        res.json({ message: 'Успех!' })
    } catch (e) {
        res.status(400).json(e)
    }
}

module.exports = addQuestion