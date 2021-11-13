'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Dotacion = sequelize.define('Dotacion', {
    nombreproducto: DataTypes.STRING,
    codigo: DataTypes.STRING,
    fecha: DataTypes.STRING,
    sistemaoperativo: DataTypes.STRING,
    tipo: DataTypes.STRING,
  }, {
    tableName: "dotaciones"
  });

  Dotacion.associate = function(models) {
    Dotacion.belongsTo(models.User, { as: "residente", foreignKey: "user_id" })
  };

  return Dotacion;
};