const express = require('express');
const router = express.Router();

const { handleCreateArticle, handleCreateUser, handleLikesAndViews, handleGetArticle } = require('../controllers/article');


// Create user

router.post('/', handleCreateUser);


router.route('/:id')
.get(handleGetArticle)
.post(handleCreateArticle)
.patch(handleLikesAndViews)


module.exports = router;