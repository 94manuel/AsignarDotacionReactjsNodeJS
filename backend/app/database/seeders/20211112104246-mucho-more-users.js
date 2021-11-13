'use strict';

const { User } = require('../../models/index');
const faker = require('faker');

module.exports = {
  
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      User.create({
        nombres: faker.name.findName(),
        correo: "manu_fer_santo@live.com.mx",
      })
    ]);

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', {
      age: 32
    }, {});
  }

};
