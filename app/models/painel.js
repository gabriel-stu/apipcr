module.exports = (sequelize, Sequelize,DataTypes,Artista) => {
    const Painel = sequelize.define("painel", {
      id_pan: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
          },
      area: {
        type: DataTypes.DECIMAL(10,2),
        allowNull:false 
        },
      ordem_ser: {
        type: Sequelize.INTEGER
      },
      data_init: {
        type: DataTypes.DATEONLY,
        allowNull:true
      },
      data_ter: {
        type: DataTypes.DATEONLY,
        allowNull:true
      },
      local: {
        type: DataTypes.STRING(40),
      },
      local_arm: {
        type: DataTypes.STRING(40),
      },
    },{
      timestamps: false
    });

    Artista.hasMany(Painel,{
      foreignKey:'id_art'
    });

    return Painel;

  };
