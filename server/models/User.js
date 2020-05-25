const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    images: {
        type: Array,
        default: []
    },
    followers: [],
    following: []
})

module.exports = mongoose.model('User', userSchema)