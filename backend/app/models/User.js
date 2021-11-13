'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    nombres: DataTypes.STRING,
    correo: DataTypes.STRING
  }, {
    tableName: "users"
  });

  User.associate = function(models) {
    // Usuario tiene un domicilio o una direccion
    User.hasOne(models.Dotacion, { as: "domicilio", foreignKey: "user_id" });
  };

  return User;
};