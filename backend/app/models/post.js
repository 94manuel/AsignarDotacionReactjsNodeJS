'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    nombreproducto: DataTypes.STRING,
    codigo: DataTypes.STRING,
    sistemaoperativo: DataTypes.STRING,
    tipo: DataTypes.STRING,
  }, {});
  post.associate = function(models) {
    // associations can be defined here
  };
  return post;
};