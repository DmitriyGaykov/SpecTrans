const {receiveErrors} = require("../scripts/exceptionScript");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const createToken = require("../scripts/createToken");
const Role = require("../models/role");
const renameFile = require("../scripts/renameFile");
const path = require("path");
const getObjectFromToken = require("../scripts/getObjectFromToken");

class AuthController {
    // [POST]
    async logIn(req, res) {
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

    // [POST]
    async signUp(req, res) {
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

    // [POST]
    async logInWithToken(req, res) {
        try {
            let user = req.tokenObject

            if(user) {
                user = await User.findOne({
                    _id: user?._id,
                    name: user?.name }).populate('role')

                res.json(user)
            } else {
                res.status(403).json({ message: 'Не авторизирован!' })
            }
        } catch (e) {
            res.status(403).json({ message: 'Не авторизирован!' })
        }
    }
}

module.exports = new AuthController()