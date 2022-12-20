module.exports = (sequelize, Sequelize) => {
    const Deposito = sequelize.define("deposito", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    nome: {
        type: Sequelize.STRING
      }
    });
  
    return Deposito;
  };