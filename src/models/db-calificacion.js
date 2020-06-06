const mongoose = require('mongoose');
const {Schema} = mongoose;

//libreria para fechas
const moment = require('moment');

//configuramos el idioma local
moment.locale('es');

const CalificacionSchema = new Schema ({

    //ID PROPIO
    id: {type: String, require: true},

    //ID DEL USUARIO
    user: {type: String, require: true},
    
    //VENTAS, ALQUIER, DONACION, VENTAS.
    tipotransaccion: {type: String, require: true},

    // HASTA 120 CARACTERES
    calificacion: {type: String , maxlength: 120 , require: true},

    creacion: {
        type: String, 
        default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    }

})
module.exports = mongoose.model('Calificacion', CalificacionSchema);