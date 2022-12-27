module.exports = (sequelize, Sequelize) => {
    const Material = sequelize.define("material", {
      id_mat: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
          },
      nome: {
        type: Sequelize.STRING(40),
        allowNull:false 
        },
      tipo: {
        type: Sequelize.STRING(40)
      },
      cor: {
        type: Sequelize.STRING(20)
      },
      und: {
        type: Sequelize.STRING(15),
        allowNull:false 
      },
      quant: {
        type: Sequelize.INTEGER,
      },
    },{
      timestamps: false
    });


    return Material;

  };
