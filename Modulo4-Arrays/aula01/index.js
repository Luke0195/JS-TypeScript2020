// Aula 01:  Revisão do básico em Arrays

const nomes =  [ 'Lucas', 'Igor', 'Matheus', 'Marcos', 'Vinicius'];

delete nomes[2]; // Deleta o conteudo do indice, mas não deleta o indice do array
console.log(nomes);
nomes[2] = 'Emanuel'; 

// Podemos criar um array através de uma instância

const newArray = new Array('JS', 'NodeJS', 'React', 'React-Native'); // Só que é pouco usado.

console.log(newArray);

newArray[4] =  'Electron';
console.log(newArray);

delete newArray[4];
console.log(newArray);
newArray.pop();
console.log(newArray);

// Rest  operator é representado por ...nomes
// Spread espalha os elementos

const novo = [...nomes,'Diego', 'Mayke', 'Vini', 'Thiago', 'Tiago', 'Robson'];
nomes.push('Roger'); // Adiciona um elemento no final do array;
nomes.unshift('João'); // Adiciona no começo do array.



console.log(novo);

const primeirosNomes = novo.slice(0, 6);
console.log(primeirosNomes);

const ultimosNomes = novo.slice(5,11);
console.log(ultimosNomes);


const nomeArray = 'Lucas Alves Dos Santos';
console.log(nomeArray.split(' '));  // Separa os elementos por um caractere especifico
// Obs: Só é póssivel utilizar o método split em string

console.table(nomes);