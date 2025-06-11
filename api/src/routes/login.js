const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

router.post('/', loginController.login); // rota simplificada

module.exports = router;
