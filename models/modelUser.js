const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
    numberOfLikes: {
        type: Number,
    },
    numberOfViews: {
        type: Number,
    }
}, { timestamps: true });


const articles = mongoose.model('article', articleSchema);
const users = mongoose.model('user', userSchema);

module.exports = {
    articles, users,
}