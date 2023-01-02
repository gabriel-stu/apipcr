const pedido = require("../controllers/pedido.controller.js");
// const db = require("../models/index.js");

var pedidoRouter = require("express").Router();

// Criar novo pedido
pedidoRouter.post("/create",pedido.create);
// Pesquisa por ID
pedidoRouter.get("/search/:id",pedido.findOne);
//Pesquisa geral
pedidoRouter.get("/search",pedido.findAll);
//Update dos dados do pedido
pedidoRouter.put("/update/:id",pedido.update);
//deletar um pedido
pedidoRouter.delete("/delete/:id",pedido.delete);



module.exports = pedidoRouter;