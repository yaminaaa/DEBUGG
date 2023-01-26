const express = require('express')

const controllers = require('../controllers/controllers');

const router = express.Router();

router.use(controllers.loadDrinksListMiddleware);
router.get('/cocktail/:id', controllers.loadCocktailMiddleware);
router.use(controllers.home);

module.exports = router;
