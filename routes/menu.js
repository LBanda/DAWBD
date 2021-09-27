const express = require('express');

const router = express.Router();

const menuController = require('../controllers/menu_controller');

router.get('/lista', menuController.get_lista );

router.get('/add', menuController.get_add);

router.post('/add', menuController.post_add);

module.exports = router;