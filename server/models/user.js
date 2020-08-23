const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    role: {
        type: String,
        enum: ['seller', 'buyer', 'admin'],
        default: 'buyer'
    }
})

module.exports = model('users', userSchema)