const mongoose = require('mongoose');


const handleConnectToMongoDB = (url) => {
    return mongoose.connect(url);
}


module.exports = {
    handleConnectToMongoDB,
}