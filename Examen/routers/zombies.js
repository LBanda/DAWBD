const express = require('express');

const router = express.Router();

const zombieController = require('../controllers/zombie_controller');

router.get('/lista', zombieController.get_registros );

router.get('/add', zombieController.get_add);

router.post('/add', zombieController.post_add);

module.exports = router;