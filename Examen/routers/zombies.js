const express = require('express');

const router = express.Router();

const zombieController = require('../controllers/zombie_controller');

router.get('/', zombieController.getList);
router.get('/add-register', zombieController.getAdd);
router.post('/add-register', zombieController.postAdd);


module.exports = router;