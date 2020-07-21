// Aula 14:  Arrays(Básico)

// Arrays são variáveis indexada podemos acessar o elemento através do índice da variável
const alunos  = ['Lucas', 'Matheus', 'Maria', 'João'];
console.log(alunos);

// Podemos editar o elemento do array através da sua posição
alunos[1]= 'Guilherme';
console.log(alunos);

// Forma de se adicionar um elemento no array;
alunos[4]= 'Flavia'; 
console.log(alunos);
alunos.push('Igor'); // Adiciona um elemento no final do array
alunos.unshift('Barbara'); // Adiciona um elemento no começo do array
alunos.shift(); // Remove o primeiro elemento do array;
const alunoRemovido =alunos.pop(); // Remove o ultimo valor do array
console.log(alunoRemovido);

console.log(alunos.slice(2,5)); // Podemos usar o slice para fatiar o array

console.log(alunos.splice(',')); // Separa a posição do array por virgula

//delete alunos[1]; // Apaga o conteudo do elemento deixand a posição undefined
//console.log(alunos.length); // Mostra o tamanho do array

console.log(alunos instanceof Array); // Verifica o alunos é uma instância de array

const obj={
  nome: 'OAP',
  idade: 100
}

console.log(obj instanceof Object);

