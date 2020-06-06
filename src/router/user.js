const express = require('express');
const router = express.Router();

//MODELO BD
const User = require('../models/db-user');

//METODO POST PERSONAL
router.get('/', async (req, res, ) => {

    const Data = await User.find();
    return res.json(Data)
    
})

//METODO POST PERSONAL
router.post('/Nuevo', async (req, res, ) => {

    const {nombre, apellido, avatar} = req.body;
    const Newpersonal = new Personal({ nombre, apellido, avatar })
    await Newpersonal.save();
    res.json({ status: 'Datos Guardado' });

})

//METODO PUT PERSONAL
router.put('/:id', async (req, res) => {
    
    const {nombre, apellido, avatar } = req.body;
    await Personal.findOneAndUpdate(req.params_id, {nombre, apellido, avatar });
    res.json({ status: 'Datos Actualizado' });

})

//METODO DETELE PERSONAL
router.delete('/:id', async (req, res) => {
    
    await Personal.findByIdAndRemove(req.params.id);
    res.json({ status: 'Usuario Borrado' });

})


//EXPORTAMOS ROUTER
module.exports = router;