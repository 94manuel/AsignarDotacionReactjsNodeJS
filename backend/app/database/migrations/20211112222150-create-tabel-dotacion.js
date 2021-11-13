'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('dotaciones', { 
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      nombreproducto: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ""
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }

    });
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('dotaciones');
  }
};
