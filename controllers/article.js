const users = require('../models/modelUser');

const handleCreateArticle = async(req, res) => {
    const body = req.body;
    console.log('create-article');
    
}

const handleCreateUser = async(req, res) => {
    const body = req.body;
    console.log(body);    
}

const handleGetArticle = async(req, res) => {
    const body = req.body;
    console.log('getarticle');
}

const handleLikesAndViews = async(req, res) => {
    const body = req.body;
    console.log('likes');
}


module.exports = {
    handleCreateArticle,
    handleCreateUser,
    handleGetArticle,
    handleLikesAndViews,
}