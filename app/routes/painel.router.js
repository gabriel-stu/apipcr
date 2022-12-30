const painel = require("../controllers/painel.controller.js");
// const db = require("../models/index.js");

var painelRouter = require("express").Router();

// Criar novo painel
painelRouter.post("/create",painel.create);
// Pesquisa por ID
painelRouter.get("/search/:id",painel.findOne);
//Pesquisa geral
painelRouter.get("/search",painel.findAll);
//Update dos dados do painel
painelRouter.put("/update/:id",painel.update);
//deletar um painel
painelRouter.delete("/delete/:id",painel.delete);



module.exports = painelRouter;