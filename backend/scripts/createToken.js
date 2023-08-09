const {secret} = require("../config")
const jws = require("jsonwebtoken");

const createToken  = (payload) => {
    return jws.sign(payload, secret, { expiresIn: '7d' })
}

module.exports = createToken