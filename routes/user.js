const express = require('express');

const router = express.Router();

const menuController = require('../controllers/user_controller');

router.get('/login', user_Controller.getlogin );

module.exports = router;