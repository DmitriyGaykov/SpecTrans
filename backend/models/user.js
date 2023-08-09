const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img : {
        type: String,
        required: true
    }
})

UserSchema.pre('save', function (next) {
    const user = this

    bcrypt.hash(user.password, Number(process.env.SOLTS) || 10, (err, hash) => {
        if(err) {
            console.log(err)
        } else {
            user.password = hash
            next()
        }
    })
})

UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', UserSchema)

module.exports = User