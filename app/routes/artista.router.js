const artista = require("../controllers/artista.controller.js");
// const db = require("../models/index.js");

var artistaRouter = require("express").Router();

// Criar novo artista
artistaRouter.post("/create",artista.create);
// Pesquisa por ID
artistaRouter.get("/search/:id",artista.findOne);
//Pesquisa geral
artistaRouter.get("/search",artista.findAll);
//Update dos dados do artista
artistaRouter.put("/update/:id",artista.update);
//deletar um artista
artistaRouter.delete("/delete/:id",artista.delete);



module.exports = artistaRouter;