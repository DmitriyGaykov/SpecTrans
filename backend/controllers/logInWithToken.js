const getObjectFromToken = require("../scripts/getObjectFromToken");
const User = require("../models/user");
const logInWithToken = async (req, res) => {
    try {
        const token = req.body.token

        let user = getObjectFromToken(token)
        console.log(user)

        if(user) {
            user = await User.findById(user?._id)
            res.json(user)
        } else {
            res.status(403).json({ message: 'Не авторизирован!' })
        }
    } catch (e) {
        res.status(403).json({ message: 'Не авторизирован!' })
    }
}

module.exports = logInWithToken