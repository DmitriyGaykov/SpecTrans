const User = require("../models/user");
const bcrypt = require("bcrypt");
const createToken = require("../scripts/createToken");
const {receiveErrors} = require("../scripts/exceptionScript");

const logIn = async (req, res) => {
    try {
        const [result] = receiveErrors(req)

        if(!result.isEmpty())
            res.status(400).json()

        const user = req.body
        const dbUser = await User.findOne({ name: user.name })

        if(dbUser) {
            await bcrypt.compare(user.password, dbUser.password, (err, matches) => {
                if (matches) {
                    const token = createToken({ _id: dbUser._id, name: user.name })
                    res.json({ token })
                } else {
                    res.status(500).json()
                }
            })
        } else {
            res.status(500).json()
        }
    } catch (e) {
        res.status(500).json()
    }
}

module.exports = logIn