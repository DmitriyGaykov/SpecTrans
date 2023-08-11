const {generateException} = require("../scripts/exceptionScript");
const editMiddleware = (req, res, next) => {
    try {
        const material = req.body

        Object.keys(material).forEach(key => {
            if(material[key] === "") {
                throw generateException(key, `Поле ${key} заполненно неверно`)
            }
        })

        return next()
    } catch (e) {
        return res.status(400).json(e)
    }
}

module.exports = editMiddleware