//  Aula 01: Criando classes

class Pessoa{
    constructor(nome, sobrenome){
      this.nome = nome;
      this.sobrenome = nome;
    }

    teste(nome){
      return ` ${this.nome} está realizando um teste sobre função construtoras`;
    }
}

const p1 = new Pessoa('Lucas', 'Santos');

console.log(p1.teste());

// Comparando uma classe com uma função construtora

function Pessoa1(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa1.prototype.falar = (nome) => console.log(`${nome} está falando`);

const p2 = new Pessoa1('Igor', 'Ribeiro');
console.log(p2.falar(p2.nome));
