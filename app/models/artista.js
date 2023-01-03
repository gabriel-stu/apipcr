module.exports = (sequelize, Sequelize) => {
    const Artista = sequelize.define("artista", {
      id_art: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
          },
      nome: {
        type: Sequelize.STRING(80),
        allowNull:false 
        },
      apelido:{
        type: Sequelize.STRING(30),
      }
    },{
      timestamps: false
    });

    return Artista;

  };
