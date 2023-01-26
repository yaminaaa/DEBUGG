const dataMapper = require('../dataMapper');

const controllers = {
    loadCocktailMiddleware(request, response, next){
        const cocktailId = request.params.id;

        response.locals.drink = dataMapper.getCocktailById(cocktailId);
        next();
    },
    loadDrinksListMiddleware(request, response, next){
        const queryString = request.query.s;
        
        response.locals.drinksList = dataMapper.search(queryString);
        next();
    },
    home(_request, response){
        response.render('index');
    },
};

module.exports = controllers;

