const postsController = require("../controllers/posts");
const validate = require("../middlewares/auth"); // se tiver autenticação

const express = require('express');
const postsRoutes = express.Router();

postsRoutes.get('/', validate, postsController.posts); // rota GET /posts

module.exports = postsRoutes;
