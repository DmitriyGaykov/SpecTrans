const {receiveErrors, generateException} = require("../scripts/exceptionScript");
const Question = require("../models/question");
const {addLastVisit} = require("../scripts/questionsScript");
const {getCheckStrFromRequest} = require("../scripts/requestScripts");

class QuestionController {
    // [POST]
    async addQuestion(req, res) {
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

            res.json(question)

            addLastVisit(getCheckStrFromRequest(req))
        } catch (e) {
            res.status(400).json(e)
        }
    }

    //[DELETE]
    async dellQuestion(req, res) {
        try {
            const _id = req.params.id
            await Question.findByIdAndRemove(_id)
            res.json(generateException('message', 'Успех'))
        } catch (e) {
            res.status(400).json(generateException('error', 'В доступе отказано'))
        }
    }

    // [GET]
    async getQuestions(req, res) {
        try {
            const questions = await Question.find({})

            if(questions)
                return res.json(questions)

            throw generateException('error', 'В доступе отказано')
        } catch (e) {
            return res.status(400).json(e)
        }
    }
}

module.exports = new QuestionController()