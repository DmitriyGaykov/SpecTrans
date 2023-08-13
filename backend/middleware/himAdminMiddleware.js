const {token_name} = require("../config");
const {generateException} = require("../scripts/exceptionScript");
const getObjectFromToken = require("../scripts/getObjectFromToken");
const User = require("../models/user");

const himAdminMiddleware = async (req, res, next) => {
    try {
        const { _id, name } = req.tokenObject

        const user = await User.findOne({_id: _id, name: name}).populate('role')

        if(user && user.role.role === 'admin') {
            return next()
        }

        throw ''
    } catch (e) {
        return res.status(400).json(generateException('error', 'В доступе отказано'))
    }
}

module.exports = himAdminMiddleware