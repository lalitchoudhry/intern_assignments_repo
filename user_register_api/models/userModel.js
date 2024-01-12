const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    friends: {
        type: Array,
        default: [],
    },
    token: {
        type: String,
        default: ""
    }
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);