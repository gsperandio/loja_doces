import express from 'express'; // Importando  express
import DoceControllers from './Controllers/DoceController.js';
import CategoriaControllers from './Controllers/CategoriaController.js';

const server = express(); // Iniciando o express

server.use(express.json()) // para poder utilizar o server em json

server.get('/',(req,res)=>{
    res.status(200).json("Servidor Funcionando")
})

server.get('/doces', DoceControllers.read);
server.post('/doces', DoceControllers.create);
server.put('/doces/:id_doce', DoceControllers.update);
server.delete('/doces/:id_doce', DoceControllers.delete);

server.get('/categorias', CategoriaControllers.read);
server.post('/categorias', CategoriaControllers.create);
server.put('/categorias/:id_categoria', CategoriaControllers.update);
server.delete('/categorias/:id_categoria', CategoriaControllers.delete);

server.listen(5000);

