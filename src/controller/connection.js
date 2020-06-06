const conn = require('mongoose');
const URI = 'mongodb://localhost/db_name';
//mongodb+srv://chan_user:22-!wTJ7V-&uxBM@cluster0-c5zfp.mongodb.net/<dbname>?retryWrites=true&w=majority

conn.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = conn;
