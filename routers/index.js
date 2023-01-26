const express = require('express');
const router = express.Router();

const cocktailRouter = require('./main');
const routerRouter = require('./quiz');

const loadCocktailMiddleware = require('../middlewares/loadCocktailMiddleware');
const loadDrinksListMiddleware = require('../middlewares/loadDrinksListMiddleware');

router.use(userMiddleware);

router.use(cocktailRouter);
router.use(routerRouter);
/*
router.use('/admin', userConnectedMiddleware, userIsAdminMiddleware, adminRouter);
*/

module.exports = router;
