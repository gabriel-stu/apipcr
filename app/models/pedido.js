module.exports = (sequelize, Sequelize,DataTypes,Artista,Material) => {
    const Pedido = sequelize.define("pedido", {
      id_ped: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
          },
      motivo: {
        type: DataTypes.STRING(60), 
        },
      data: {
        type: DataTypes.DATE,
      }
    },{
      timestamps: false
    });

    Artista.hasMany(Pedido,{
      foreignKey:'id_art'
    });
    Material.hasOne(Pedido,{
        foreignKey:'id_mat'
    })
    return Pedido;

  };
