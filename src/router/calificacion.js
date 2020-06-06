const express = require('express');
const router = express.Router();

//MODELO BD
const Calificacion = require('../models/db-calificacion');
const USER = require('../models/db-user');

//METODO POST PERSONAL
router.post('/', async (req, res, ) => {

    //RECIBIMOS LOS DATOS
    const { id, user, tipotransaccion, calificacion } = req.body;
    const Cal = calificacion;

    //VALIDAMOS SI EXISTE EL USUARIO
    const query = { nombre: user };
    const Validacion = await USER.find(query);

    if (!Validacion) {
        res.json({ status: 'Usuario No Valido' });
    }

    //VALIDAR 120 CARACTERES
    if (Cal.length > 120) {
        res.json('Error Tienes mas de 120 caracteres');
    }

    //GUARDAMOS LOS DATOS
    const NewCalificacion = new Calificacion({ id, user, tipotransaccion, calificacion })
    await NewCalificacion.save();
    res.json({ status: 'Datos Guardado' });

})


//EXPORTAMOS ROUTER
module.exports = router;