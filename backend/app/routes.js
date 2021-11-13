const express = require('express');
const router = express.Router();

// Importar controladores
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

// Home
router.get('/', (req, res) => res.json({ foo: "bar" }));

// Users
router.get('/allTrabajadores', UserController.all);
router.post('/addTrabajadores', UserController.addTrabajadores);
router.post('/addDotacion', AddressController.addDotacion);
router.post('/DeleteDotacion', AddressController.DeleteDotacion);
router.post('/showDotacion', UserController.showDotacion);
router.get('/dotaciones', AddressController.all);

module.exports = router;