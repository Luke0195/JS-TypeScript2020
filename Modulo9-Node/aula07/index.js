// Aula 07: Express Router e Controllers
const express = require('express');
const routes = require('./routes');
const app = express();
app.use(routes);
app.use(express.json());







app.listen(3000, () =>{
  console.log('Clique aqui para acessar: http://localhost:3333');
  console.log('Server is running');
});