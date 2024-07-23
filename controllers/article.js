const users = require('../models/modelUser');
const Article = require('../models/modelArticle');



// creating a article 

const handleCreateArticle = async (req, res) => {
    const user = await users.findById(req.params.id);
    const { title, author, body } = req.body;

    if (!title || !author || !body) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    await Article.create({ 
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
    if(!body || !body.name ){
        return res.json({ msg: "All fields are required" });
    }

    await users.create({ name: body.name })

    return res.json({ msg: 'success' })

    
}


// showing a article

const handleGetArticle = (req, res) => {
    const body = req.body;
    console.log('getarticle');
}



// handling a like and views 

const handleLikesAndViews = (req, res) => {
    const body = req.body;
    console.log('likes');
}


module.exports = {
    handleCreateArticle,
    handleCreateUser,
    handleGetArticle,
    handleLikesAndViews,
}