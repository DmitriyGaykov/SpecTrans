const {getCheckStrFromRequest} = require("../scripts/requestScripts");
const {differenceInSeconds} = require("date-fns/fp");
const {generateException} = require("../scripts/exceptionScript");
const {getLastAdding, waitTime, deleteLastAdding} = require("../scripts/questionsScript");

const addQuestionMiddleware = (req, res, next) => {
    try {
        const checkStr = getCheckStrFromRequest(req)
        const lastVisit = getLastAdding(checkStr)

        if(!lastVisit)
            return next()

        const diffInSeconds = differenceInSeconds(lastVisit, new Date())

        if(diffInSeconds > waitTime) {
            next()
        } else {
            throw generateException('error', `Отказано по времени. Вы сможете отправить вопрос через ${waitTime - diffInSeconds} секунд`)
        }
    } catch (e) {
        res.status(400).json(e)
    }
}

module.exports = addQuestionMiddleware