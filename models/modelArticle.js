const mongoose = require('mongoose');


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

module.exports = articles;