const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });




const users = mongoose.model('user', userSchema);

module.exports = users;
