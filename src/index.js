'use strict';
import express from 'express';
import { Contenedor } from './resources/handlerFiles.js';
const archivo = new Contenedor('productos.txt');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Dirigite a la ruta "/productos" ó "/productoRandom"</h1>');
});

app.get('/productos', (req, res) => {
    archivo.getAll().then(dataFile => res.send(dataFile));
});

app.get('/productoRandom', (req, res) => {
    archivo.getRandomProduct().then(dataFile => res.json(dataFile));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}.`);
});