const {body} = require("express-validator");
const {generateException} = require("../scripts/exceptionScript");

const nameMiddleware = body('name', generateException('name', 'Имя должно содержать от 2 до 20 символов'))
    .isLength({
        min: 2,
        max: 20
    })

const phoneMiddleware = body('phone', generateException('phone', 'Телефон в неправильном формате'))
    .isMobilePhone('be-BY')

const commentMiddleware = body('comment', generateException('comment', 'Комментарий должен содрежать от 20 до 300 символов'))
    .isLength({
    min: 20,
    max: 300
})

module.exports = [nameMiddleware, phoneMiddleware, commentMiddleware]