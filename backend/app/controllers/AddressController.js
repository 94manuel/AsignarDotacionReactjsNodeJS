const { Dotacion } = require('../models/index');

module.exports = {

    async all(req, res) {
        let Dotacion = await Dotacion.findAll({
            attributes: ['nombreproducto'],
            include: {
                association: 'residente',
                attributes: ['nombres']
            }
        });

        res.json(Dotacion);
    },
    async addDotacion(req, res) {
        let Dotacion = await Dotacion.findAll({
            where:{codigo: req.body.codigo}
            
        }).then(async (data) =>{
            console.log(0 < data.length);
            if(0 < data.length){
                var dotacionencontada = data[0].dataValues;
                res.json({mensaje: "La dotacion ya esta asignada",dotacion:null});                
            }else{
                let dotacion = await Dotacion.create({
                    nombreproducto: req.body.nombreproducto,
                    user_id: req.body.user_id,
                    codigo: req.body.codigo,
                    fecha: req.body.fecha,
                    sistemaoperativo: req.body.sistemaoperativo,
                    tipo: req.body.tipo,
                  })
                res.json({mensaje: "La dotacion se asigno corectamente",dotacion:dotacion});                

            }
        });
        /*
        let dotacion = await Address.create({
            nombreproducto: req.body.nombreproducto,
            user_id: req.body.user_id,
            codigo: req.body.codigo,
            fecha: req.body.fecha,
            sistemaoperativo: req.body.sistemaoperativo,
            tipo: req.body.tipo,
          })*/
    },
    async DeleteDotacion(req, res) {
        let dotacion = await Dotacion.destroy({
            where : {id:req.body.id}
          })
        res.json(dotacion);
    },

}