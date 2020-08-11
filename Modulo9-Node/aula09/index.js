// Aula 07: Express Router e Controllers
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const connectionString ='mongodb+srv:lucasadmin:admin@cluster0.msess.mongodb.net/CONTACTS?retryWrites=true&w=majority';
const app = express();
app.use(routes);
app.use(express.json());

mongoose.connect(connectionString);










app.listen(3333, () =>{
  console.log('Clique aqui para acessar: http://localhost:3333');
  console.log('Server is running');
});