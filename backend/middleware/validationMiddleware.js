const { body } = require('express-validator')
const {generateException} = require("../scripts/exceptionScript");

module.exports = [
    body('name', generateException('name', 'Имя должно содержать хотя бы 4 символа, но меньше 20')).isLength({
        min: 4,
        max: 20
    }),
    body('password', generateException('password', "Пароль должен быть от 8 до 64 символов")).isLength({
        min: 8,
        max: 64
    }),
    body('img', generateException('img', 'Предоставьте изображение с вами')).isEmpty()
]