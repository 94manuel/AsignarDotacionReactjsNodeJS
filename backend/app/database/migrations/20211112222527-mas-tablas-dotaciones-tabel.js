module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        // Para crear el campo city
        queryInterface.addColumn('dotaciones', 'fecha', {
          type: Sequelize.STRING,
          defaultValue: ""
        }, { transaction: t }),

        // Para crear el campo country
        queryInterface.addColumn('dotaciones', 'sistemaoperativo', {
          type: Sequelize.STRING,
          defaultValue: ""
        }, { transaction: t }),
        // Para crear el campo country
        queryInterface.addColumn('dotaciones', 'tipo', {
          type: Sequelize.STRING,
          defaultValue: ""
        }, { transaction: t })
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        queryInterface.removeColumn('dotaciones', 'tipo', { transaction: t }),

        queryInterface.removeColumn('dotaciones', 'sistemaoperativo', { transaction: t })
      ])
    })
  }
};