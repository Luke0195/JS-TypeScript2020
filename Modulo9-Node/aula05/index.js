// Aula 05: Express - Introdução
const express = require('express');
const { response } = require('express');
const app = express();



app.get('/', (request, response) =>{
 return response.send(`
  <form action="/" method="POST">
    Nome: <input type="text" name="nome" placeholder="Informe o seu nome">
    Senha: <input type="password" name="senha" placeholder="Informe sua senha">
    <button> Enviar </button>
  </form>
  `);
});

app.post('/', (request, response)=>{
  return response.json({message: 'Seus dados foram cadastrados com sucesso'})
})
app.get('/contato', (request, response) =>{
  return response.send('Obrigado por entrar em contato conosco');
});



app.listen(3000, () =>{
  console.log('Clique aqui para acessar: http://localhost:3333');
  console.log('Server is running');
});