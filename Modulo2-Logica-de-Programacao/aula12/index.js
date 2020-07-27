// Aula 12: For of : Estrutura de repetição

// O for of retorna o valor da string  

const nome = 'Luiz Otavio';

// Utilizando for classico

for( let i = 0; i< nome.length; i++){
  console.log(nome[i]);
}

// Utilizando o for of

for( letra of nome){
  console.log(letra);
}

console.log('####')
const array = [1, 2, 3,4];

for(indice in nome){
  console.log(`O indice ${indice} recebe o valor ${nome[indice]}`);
}

console.log('#####');

console.log('Usando o forEach');


const numeros = [ 0, 1,2 ,3, 4,5,6,7,8];





const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}

for( chave of pessoa){
  console.log(chave);
}


// For classico -> Geralmente com iteraveis (array ou strings)
// For in ->  Retorna o indice ou chaves  (string, array ou objetos)
// for of -> Retorna o valor em si (interaveis, arrays e string)

