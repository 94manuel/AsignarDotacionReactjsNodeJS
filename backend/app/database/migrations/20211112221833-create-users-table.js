'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('users', { 
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      nombres: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Anton"
      },

      correo: {
        type: Sequelize.STRING,
        allowNull: false
      }

    });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('users');
  }
};
