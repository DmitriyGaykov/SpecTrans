const {token_name} = require("../config");
const getObjectFromToken = require("../scripts/getObjectFromToken");
const User = require("../models/user");
const {generateException} = require("../scripts/exceptionScript");

const hisAuthorizedMiddleware = async (req, res, next) => {
    try {
        const {_id, name} = req.tokenObject

        if (_id && name) {
            const user = await User.findOne({_id, name})

            if (user) {
                next()
            }
        }

        throw generateException('error', 'В доступе отказано')
    } catch (e) {
        return res.status(400).json(e)
    }
}

module.exports = hisAuthorizedMiddleware