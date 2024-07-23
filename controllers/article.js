const users = require('../models/modelUser');
const articles = require('../models/modelArticle');
const mongoose = require('mongoose');



// creating a article 

const handleCreateArticle = async (req, res) => {
    const user = await users.findById(req.params.id);
    const { title, author, body } = req.body;

    if (!title || !author || !body) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    await articles.create({
        title: title,
        author: author,
        body: body,
        numberOfLikes: 0,
        numberOfViews: 0,
    });
    return res.json({ msg: 'success' });
}



// creating a user

const handleCreateUser = async (req, res) => {
    const body = req.body;
    console.log(body);
    if (!body || !body.name) {
        return res.json({ msg: "All fields are required" });
    }

    await users.create({ name: body.name })

    return res.json({ msg: 'success' })


}


// showing a article

const handleGetArticle = async (req, res) => {
    const article = await articles.findById(req.params.id);
    if( !article ) return res.status(404).json({ error: "user not found" });
    return res.json(article);
}



// handling a like

const handleIncrementLikes = async (req, res) => {

    let isArticle = await articles.findById(req.params.id);
    if (!isArticle) { return res.status(404).json({ error: "article not found" }) }

    let ID = req.params.id;

    await articles.findOneAndUpdate(
        {ID},
        { $inc: { numberOfLikes: 1 } },
        { new: true }
    )

    return res.json({ msg: 'Likes updated successfully' });
}



// handling a views 

const handleIncrementViews = async (req, res) => {

    let isArticle = await articles.findById(req.params.id);
    if (!isArticle) { return res.status(404).json({ error: "article not found" }) }

    let ID = req.params.id;

    await articles.findOneAndUpdate(
        {ID}, 
        { $inc: { numberOfViews: 1 } },
        { new: true } 
     )

     return res.json({ msg: 'Views updated successfully' })
}


module.exports = {
    handleCreateArticle,
    handleCreateUser,
    handleGetArticle,
    handleIncrementViews,
    handleIncrementLikes
}