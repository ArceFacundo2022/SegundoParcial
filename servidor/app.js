const express = require('express')
const cors = require('cors')
require('dotenv').config()
const morgan = require('morgan')

//Inicializaciones

const app = express()

//Settings
const port = 3000;

//Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('combined'))
app.use(express.urlencoded({extended: false}))
//Archivos estaticos

//Routes
app.use(require('./src/routes/routes'))

//Inicializar servidor
app.listen(port,()=>{
    console.log(`Servidor inicializado en el puerto ${port}`)
})