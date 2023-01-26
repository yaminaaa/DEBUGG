const data = require('./data');

// Je suis fatigué je commenterais demain
const sf = (n, i, t, s2) => !!s2 ? !n.toLowerCase().includes(s2) ? (lk = e => e == s2) & !![...i, ...t].filter(lk)[0] ? 1 : 0 : 1 : 1;

const dataMapper = {
    search(s){
        return data.filter(c => sf(c.name, c.ingredients, c.tags, s));
    },
    getCocktailById(cocktailId){
        const cocktail = data.find(({ id }) => id == cocktailId);
        return cocktail;
    },
};

module.exports = dataMapper

