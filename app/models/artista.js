module.exports = (sequelize, Sequelize) => {
    const Artista = sequelize.define("artista", {
      id_art: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
          },
      nome: {
        type: Sequelize.STRING(50),
        allowNull:false 
        },
      cpf: {
        type: Sequelize.STRING(14)
      },
      cnpj: {
        type: Sequelize.STRING(20),
      }
    },{
      timestamps: false
    });

    return Artista;

  };
