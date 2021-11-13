const express = require('express');
const app = express();
const { sequelize } = require('./models/index'); 
const cors = require('cors');

// Setting
const PORT = process.env.PORT || 3001;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require('./routes'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    sequelize.authenticate().then(() => {
        console.log("Se ha establecido la conexión");
    })
});