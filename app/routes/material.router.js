const material = require("../controllers/material.controller.js");
// const db = require("../models/index.js");

var materialRouter = require("express").Router();

// Criar novo material
materialRouter.post("/create",material.create);
// Pesquisa por ID
materialRouter.get("/search/:id",material.findOne);
//Pesquisa geral
materialRouter.get("/search",material.findAll);
//Update dos dados do material
materialRouter.put("/update/:id",material.update);
//deletar um material
materialRouter.delete("/delete/:id",material.delete);



module.exports = materialRouter;