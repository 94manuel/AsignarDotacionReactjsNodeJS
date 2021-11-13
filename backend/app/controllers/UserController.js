const { User,Dotacion } = require('../models/index');

module.exports = {

    async all(req, res) {
        let users = await User.findAll({
            
        });

        res.json(users);
    },

    async addTrabajadores(req, res) {
        console.log(req.body);
        let users = await User.create({
            nombres: req.body.nombres,
            correo: req.body.correo,
          })
        res.json(users);
    } ,

    async showDotacion(req, res) {
        console.log(req);
        let Dotacions = await Dotacion.findAll({ where: { user_id: req.body.id }});

        res.json(Dotacions);
    } 

}