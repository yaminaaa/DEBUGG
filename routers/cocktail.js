const express = require('express');
 const cocktailController = require('../controllers/cocktailController');
 const router = express.Router();

 router.get('/', cocktailController.home);

 module.exports = router;