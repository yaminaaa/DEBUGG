const { cocktail } = require("../models");

 const cocktailController = {
   async getAll(req, res) {
     const cocktails = await cocktail.findAll();

     res.json(cocktails);
   },
   async getOne(req, res) { 
     // Récupérer un cocktail à partir du req.params.id
     const cocktail = await cocktail.findByPk(req.params.id);

     res.json(cocktail);

   },
   async create(req, res) { 
     console.log(req.body);

     const item = await cocktail.create(req.body);
     res.json(item);

   },
   async update(req, res) { 
     await cocktail.update(req.body, { 
       where: { id: Number(req.params.id)}
     });

     const item = await cocktail.findByPk(req.params.id);
     res.json(item);

   },
   async delete(req, res) { 
     const item = await cocktail.destroy({
       where: { id: req.params.id }
     });

     res.json(item);
   }

 }

 module.exports = cocktailController;