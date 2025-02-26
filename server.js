#!/usr/bin/env node

import express from 'express';
import fs from 'node:fs';
import pc from 'picocolors';

const app = express()
app.disable('x-powered-by')

const port = process.env.PORT ?? 8080

app.get('/', (req, res) => {
   console.log(pc.blue('Peticion recibida...'), req.url)
   fs.readFile('./html/ruta1/index.html', (err, data) => {
      if (err) {
         res.status(500).send('Error en el servidor')
      } else {
         res.status(200).send(data.toString())
      }
   })
})

app.get('/calculadora', (req, res) => {
   console.log(pc.blue('Peticion recibida...'), req.url)
   fs.readFile('./html/ruta2/index.html', (err, data) => {
      if (err) {
         res.status(500).send('Error en el servidor')
      } else {
         res.status(200).send(data.toString())
      }
   })
})

app.use('/ruta1', express.static('html/ruta1'))
app.use('/ruta2', express.static('html/ruta2'))

app.use((req, res) => {
   console.log(pc.red('Peticion recibida...'), req.url)
   res.status(404).send('<h1>404</h1>')
})


app.listen(port, () => {
   console.log(pc.green('Escuchando en el puerto =>'), pc.red('http://localhost:'+ port));
})