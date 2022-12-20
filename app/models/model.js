module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("teste", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    nome: {
        type: Sequelize.STRING
      }
    });
  
    return Model;
  };