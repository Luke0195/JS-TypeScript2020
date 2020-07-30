// Aula 02: Método Splice
//                 0       1        2           3         
const nomes =  ['Maria', 'João', 'Eduardo', 'Gabriel'];


// nomes splice (inice,delete, adicionaElementos
// primeiro argumento é de onde queremos começar.
// Segundo argumento é quantos valores queremos cortar
// Elementos que queremos adicionar
//Number.MAX_VALUE conseguimos acessar o maior valor do elemento 

// pop,push, shift, unshift, delete, splice
//nomes.pop();
//console.log(nomes);

const nomeAdicionado = nomes.push('Mayke Brito');
console.log(nomes);
//const primeiroNomeDeletado = nomes.shift();
//       0       1      2       3           4           5
// [ 'Lucas', Maria', 'João', 'Eduardo', 'Gabriel', 'Mayke Brito' ]

nomes.unshift('Lucas');
console.log(nomes);

console.table(nomes);

delete nomes[3];

console.log(nomes);
nomes[3] = 'Fernando';
console.log(nomes);

// nomes.splice(indice,deletePositions, AddElements);

console.log(nomes.splice(1,3, 'Caio', 'Pel', 'Hugo'));
