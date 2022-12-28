  const dbConfig = require("../config/db.config");
  const {Sequelize, DataTypes}= require("sequelize");
  
  const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  schema:'colorindo',
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.material = require("./material.js")(sequelize, Sequelize);
db.artista = require("./artista.js")(sequelize, Sequelize);
db.painel = require("./painel.js")(sequelize, Sequelize, DataTypes,db.artista);
db.pedido = require("./pedido.js")(sequelize,Sequelize,DataTypes,db.artista,db.material)


module.exports = db;
