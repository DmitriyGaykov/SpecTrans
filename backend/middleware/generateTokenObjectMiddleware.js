const User = require('./../models/user')
const {token_name} = require("../config");
const {generateException} = require("../scripts/exceptionScript");
const getObjectFromToken = require("../scripts/getObjectFromToken");

const generateTokenObjectMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies[token_name]

        if(!token) throw ''

        const tokenObject = getObjectFromToken(token)
        req['tokenObject'] = tokenObject

        next()
    } catch (e) {
        res.status(400).json(generateException('error', 'В доступе отказано'))
    }
}

module.exports = generateTokenObjectMiddleware