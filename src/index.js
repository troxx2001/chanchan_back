//IMPORTACIONES DE MODULOS
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

//VARIABLES DE ENTORNO
require('dotenv').config()

//IMPORTACION DE RUTAS
const USER = require('./router/user');
const CALIFICACION = require('./router/calificacion');
const PUBLICACIONES = require('./router/post')


//VARIABLES
const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080;

//CONFIGURACION DE BASE DE DATOS MONGO DB
mongoose.connect(process.env.DBMONGO,
   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,})
   .then(console.log('db conectado'))
   .catch(err => console.log(err));


//CONFIGURACION SERVER O MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//RUTAS O REST API
app.use('/', USER);
app.use('/calificacion', CALIFICACION);
app.use('/post', PUBLICACIONES);



//PUERTO DEL SERVIDOR
app.listen(PORT, () => {
  log('Servidor en el puerto: ' + PORT);
});