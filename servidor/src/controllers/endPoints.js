const { createPool } = require("mysql2/promise");
const mongoose = require('mongoose');

const pool = createPool({
    host: "mariadb",
    user: "root",
    password: "mysecretpassword",
    port: 3306
  });

const URI = `mongodb://mongodb:27017/m?retryWrites=true&w=majority`

const connectMongo = async (req, res) => {
      try {
          mongoose.connect(URI, {
              useNewUrlParser:true,
              useUnifiedTopology:true
          })
      console.log(`Conectado a la Base de Datos`)
      res.send({message: `Conectado a la Base de Datos MongoDB`})
      } catch (error) {
          console.log('Error al conectar BD')
          console.log(error)
          res.send({error: `Error al conectar a la Base de Datos MongoDB`})
      }
  }

  const connectMariaDB = async (req, res) => {
    try {
        const result = await pool.query("SELECT 1");
        res.send({message: `Conectado a la Base de Datos MariaDB`})
    } catch (error) {
        res.send({error: `Error al conectar a la Base de Datos MariaDB`})
    }
  }
  
  module.exports = {connectMongo, connectMariaDB};