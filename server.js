const express = require("express");
const db = require('./app/models/index.js');
// const bodyParser = require("body-parser");
// const cors = require("cors");
const MatRouter = require('./app/routes/material.router');
const PanRouter = require('./app/routes/painel.router');
const ArtRouter = require('./app/routes/artista.router');
const PedRouter = require('./app/routes/pedido.router');


const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// route raiz
app.get("/", (req, res) => {
  res.json({ message: "Welcome to apipcr application." });
});
//incluir routes
//rota do material
app.use('/apipcr/material',MatRouter);
//rota do painel
app.use('/apipcr/painel',PanRouter);
//rota do artista
app.use('/apipcr/artista',ArtRouter);
//rota do pedido
app.use('/apipcr/pedido',PedRouter);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

 //teste da conexão com o banco de dados
  try {
    db.sequelize.authenticate();
    console.log('A conexão foi um sucesso!');

  } catch (error) {
    console.error('Não foi possível conectar com o banco', error);
  }
 


  