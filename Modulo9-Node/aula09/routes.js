const express = require('express');
const routes = express.Router();


function meuMiddleware(rquest, response, next){
  console.log();
  console.log('passei no  seu middleware');
  console.log();
  next();
}
routes.get('/',meuMiddleware, (request, response) =>{
  return response.json({message: 'Welcome to my aplication'});
 });
 
 routes.get('/testes/:id_users?/:parametro', (request, response) =>{ // Quando utilizamos ? estamos dizendo que o parâmetro é ou não opcional
   console.log(request.query);
    return response.json({message: 'ok'});
 })
  
 routes.post('/', (request, response)=>{
   return response.json({message: 'Seus dados foram cadastrados com sucesso'})
 })
 routes.get('/contato', (request, response) =>{
   return response.json({ message: 'Obrigado por entrar em contato conosco'});
 });
 
 
 routes.get('/users', (request, response)=>{
   console.log(request.body)
  return response.send(`
   <form action="" method="POST">
   Nome:<input type="text" name="nome">
   Senha:<input type="password" name="senha">
   <button> Enviar </button>
  `)
 })
 
 routes.post('/users', (request, response)=>{
   console.log(request.body);
   return response.json({message:'ok'});
 });

 module.exports = routes;