'use strict';

const faker = require('faker');
const { User } = require('../../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let dotaciones = [];

    // Obtenemos los usuarios
    let users = await User.findAll();

    // Recorremos los usuarios y añadimos una direccion para cada unos
    users.forEach(user => {
      dotaciones.push({
        nombreproducto: faker.address.streetName(),
        user_id: user.id,
        codigo: faker.random,
        fecha: faker.datatype,
        sistemaoperativo: faker.system,
        tipo: faker.vehicle
      });
    });

    return queryInterface.bulkInsert('dotaciones', dotaciones, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('dotaciones', null, {});
  }
};
