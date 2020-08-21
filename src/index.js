const express = require('express')
const{tareasRutas } = require('./api/recursos/tareas/tareas.rutas')

const app = express()

const port = 3000


app.use(express.json())

app.use('/tareas',tareasRutas)



module.exports = { app, port }