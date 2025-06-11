const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const { validateToken } = require('../utils/token');

router.get('/', validateToken, postsController.posts);

module.exports = router;
