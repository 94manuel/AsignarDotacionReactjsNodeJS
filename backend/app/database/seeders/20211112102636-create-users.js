'use strict';

const faker = require('faker');

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let users = [
      { nombres: faker.name.findName(), correo: "asdasd@dfgdfg.com" },
      { nombres: faker.name.findName(), correo: "asdasd@dfgdfg.com" },
      { nombres: faker.name.findName(), correo: "asdasd@dfgdfg.com" },
      { nombres: faker.name.findName(), correo: "asdasd@dfgdfg.com" },
    ];

    return queryInterface.bulkInsert('users', users, {});
  },

  // Esto se ejecuta cuando se dehace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  }
};
