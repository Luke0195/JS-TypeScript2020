// Aula 06: Express -r req.params req.query e req.body
const express = require('express');
const { urlencoded, response } = require('express');
const app = express();
app.use(express.urlencoded( // Isso nos permite o express trabalhar com json
  {
    extended:true
  }
))

// /profiles/1234?produto=playstati&preco=barato

// request.params ->  é o parametro que vem da minha url exemplo: http://localhost:3333/users/1 ulitlizado para listar e editar
// request.query -> é as informações que são passsadas junto da minha ur
// exemplo -> http://localhost:3333/products/3/?nome=notebook&preco=20000  utilizado para listar e atualizar

//request.body -> é as informações que vem do corpo da requisição


app.get('/', (request, response) =>{
 return response.json({message: 'Welcome to my aplication'});
});

app.get('/testes/:id_users?/:parametro', (request, response) =>{ // Quando utilizamos ? estamos dizendo que o parâmetro é ou não opcional
  console.log(request.query);
   return response.json({message: 'ok'});
})
 
app.post('/', (request, response)=>{
  return response.json({message: 'Seus dados foram cadastrados com sucesso'})
})
app.get('/contato', (request, response) =>{
  return response.json({ message: 'Obrigado por entrar em contato conosco'});
});


app.get('/users', (request, response)=>{
  console.log(request.body)
 return response.send(`
  <form action="" method="POST">
  Nome:<input type="text" name="nome">
  Senha:<input type="password" name="senha">
  <button> Enviar </button>
 `)
})

app.post('/users', (request, response)=>{
  console.log(request.body);
  return response.json({message:'ok'});
})


app.listen(3000, () =>{
  console.log('Clique aqui para acessar: http://localhost:3333');
  console.log('Server is running');
});