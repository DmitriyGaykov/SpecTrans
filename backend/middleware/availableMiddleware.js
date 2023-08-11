const {token_name} = require("../config");
const getObjectFromToken = require("../scripts/getObjectFromToken");
const {generateException} = require("../scripts/exceptionScript");
const Material = require("../models/material");
const availableMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies[token_name]
        const obj = getObjectFromToken(token)

        if(!obj) {
            throw generateException('obj', 'В доступе отказано!')
        }

        const matId = req.params.id
        const userId = obj?._id

        const mat = await Material.find({ _id: matId, userId })

        if(!mat) {
            throw generateException('obj', 'В доступе отказано!')
        }

        next()
    } catch (e) {
        return res.status(401).json(e)
    }
}

module.exports = availableMiddleware