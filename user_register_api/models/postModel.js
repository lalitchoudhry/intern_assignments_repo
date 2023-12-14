const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: String,
    imgUrl: String,
    description: String,
    like: Number,
    comment: Array,
    commentLength: Number
})

module.exports = mongoose.model('posts', postSchema);