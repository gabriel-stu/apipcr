module.exports = app => {
    const deposito = require("../controllers/deposito.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", deposito.create);
};