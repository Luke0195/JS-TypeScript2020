// Aula 09: Funções construtoras

// Criando objetos atráves de funções construtoras  retorna objetos.

//  Iniciamos a função com a primeira letra maiscula.
// Nas funcões construtoras devemos começar as funções com letra maiscula e devemos utilizar a palavra reservada new junto com o this para referenciar o objeto criado

// Factory function

function criarPessoa(nome, sobrenome){
  return{
    nome,
    sobrenome,
  }
}

const pessoa = criarPessoa('Lucas', 'Santos');
console.log(pessoa.nome);

// Função construtora

function Jogador(nome, time, numeroCamisa){
  this.nome = nome;
  this.time = time;
  this.numeroCamisa = numeroCamisa
}


const jogador1 = new Jogador ('Lucas', 'Atletico', 10);

console.log(jogador1.nome);