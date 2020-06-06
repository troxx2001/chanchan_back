const mongoose = require('mongoose');
const {Schema} = mongoose;

//libreria para fechas
const moment = require('moment');

//configuramos el idioma local
moment.locale('es');

const UserSchema = new Schema ({

    Nombre: {type: String, require: true},
    Apellido: {type: String, require: true},
    Avatar: {type: String, require: true},

    creacion: {
        type: String, 
        default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    }

})
module.exports = mongoose.model('User', UserSchema);