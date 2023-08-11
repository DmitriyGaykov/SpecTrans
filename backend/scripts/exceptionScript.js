const {validationResult} = require("express-validator");
module.exports = {
    generateException(field, message) {
        return {
            [field]: {
                message: message
            }
        }
    },
    receiveErrors(req) {
        const result = validationResult(req)
        const arrErrors = result.errors?.map(el => el.msg)
        const errors = Object.assign({}, ...arrErrors)
        return [result, errors]
    }
}