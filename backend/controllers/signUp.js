const User = require('./../models/user')

const renameFile = require('./../scripts/renameFile')
const path = require("path");
const createToken = require("../scripts/createToken");
const {receiveErrors} = require("../scripts/exceptionScript");
const Role = require("../models/role");

const signUp = async (req, res) => {
    try {
        const [result, errors] = receiveErrors(req)

        if(!result.isEmpty()) {
            return res.status(403).json(errors)
        }

        const img = req.files?.img

        const user = await User.create({
            ...req.body,
            img: img?.name,
            role: (await Role.findOne({role: 'user'}))._id
        })

        img.name = renameFile(img, user._id)
        await img.mv(path.resolve(__dirname, '../public/img/users', img.name))
        await User.findByIdAndUpdate(user._id, { img: '/img/users/' + img.name })

        const token = createToken({ _id: user._id, name: user.name })

        res.status(200).json({ token })
    } catch (e) {
        res.status(500).json(e.errors)
    }
}

module.exports = signUp