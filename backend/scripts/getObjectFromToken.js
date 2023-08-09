const jwt = require('jsonwebtoken')
const {secret} = require("../config");
const getObjectFromToken = (token) => {
    try {
        return jwt.verify(token, secret, {expiresIn: '7d'})
    } catch (e) {
        return undefined
    }
}

module.exports = getObjectFromToken