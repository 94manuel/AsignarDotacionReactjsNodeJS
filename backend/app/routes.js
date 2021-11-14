const express = require('express');
const router = express.Router();

// Importar controladores
const UserController = require('./controllers/UserController');
const DotacionController = require('./controllers/DotacionController');

// Users
router.get('/allTrabajadores', UserController.all);
router.post('/addTrabajadores', UserController.addTrabajadores);
router.post('/addDotacion', DotacionController.addDotacion);
router.post('/DeleteDotacion', DotacionController.DeleteDotacion);
router.post('/showDotacion', UserController.showDotacion);
router.get('/dotaciones', DotacionController.all);

module.exports = router;