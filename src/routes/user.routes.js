const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const USER_API = require('../constants/endpoints/user.api');

router.get('/', userController.getAllUsers);

module.exports = router;
