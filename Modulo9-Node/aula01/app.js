// Aula 01: Sistemas de Módulos(1)

//const { Pessoa } = require('./mode1');
//const path = require('path');
//const axios = require('axios');

const tudo = require('./mode1');
const { Pessoa } = require('./mode1');

tudo.teste();
console.log(tudo.empresa);
const p1 = new Pessoa('Igor');

console.log(p1.nome);




async function teste(){
  try{
    const response = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
  }catch(error){
    console.log(error);
  }
}

teste();



const pessoa = new Pessoa('Lucas');

console.log(pessoa.nome);





/*
const {nome, sobrenome, info, teste} = require('./mode1'); // pegando os valores via atribuição via desestruturação
const sobrenome = require('./mode1').sobrenome;
// ....                             .info
//  ...                             .teste
console.log(nome);
console.log(sobrenome);
console.log(teste);
info();


*




























/*
const teste = require('./mode1'); // Nesse caso estamos importando todo o módulo do arquivo mode1.
const nome = require('./mode1').nome;
const sobrenome = require('./mode1').sobrenome;


function testeImport(nome, sobrenome){
  return ` Testando a função ${nome} ${sobrenome}`;
}


console.log(testeImport(nome, sobrenome));
*/