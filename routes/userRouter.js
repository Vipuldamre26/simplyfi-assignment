const express = require('express');
const router = express.Router();

const { handleCreateArticle, handleCreateUser, handleLikesAndViews, handleGetArticle } = require('../controllers/article');


// Create user

router.route
.post('/', handleCreateUser);


router.route
.get('/:id', handleGetArticle)
.post('/:id', handleCreateArticle)
.patch('/:id', handleLikesAndViews)


module.exports = router;