// Aula 01: Babel  e "can i use"
// Babel -> è um transpilador de código que converte o nosso código js moderno para versões mais antigas
// Comandos para executar o babel -> 
// npm install --save-dev @babel/cli @babel/preset-env @babel/core
// Com essas comandos podemos usar o babel

var nome = 'Lucas';
var objeto = {
  nome: nome
};

const novoObjeto ={
  ...objeto,
  marca: 'Samsung',
  modelo: 'XIS',
  teste(){
    console.log('Teste Executado');
  }
}


// Converter o arquivo index.js para um arquivo que os navegadores mais antigos compreendam
// npx babel index.js -o bundle.js --presets=@babel/env
// Podemos criar um script personalizado para automatizar nossas tarefas
