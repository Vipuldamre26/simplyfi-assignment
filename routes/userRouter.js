const express = require('express');
const router = express.Router();

const { handleCreateArticle, handleCreateUser, handleGetArticle, handleIncrementLikes, handleIncrementViews } = require('../controllers/article');


// Create user

router.post('/', handleCreateUser);


router.route('/:id')
.get(handleGetArticle)
.post(handleCreateArticle)

router.put('/:id/like', handleIncrementLikes);
router.put('/:id/view', handleIncrementViews);


module.exports = router;