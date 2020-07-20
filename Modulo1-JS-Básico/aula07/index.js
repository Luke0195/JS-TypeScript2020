// Aula 07: Tipos de dados primitivos 

// Strings 
const nomeCliente1= 'Lucas';
const nomeCliente2 = "Matheus";
const nomeCliente3 = `Fernando`;


// Number
const numero1 = 1;
const numero2 = 3.1

// Undefined

let nomeAluno;
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória

// Booleans
const user1Ativo = true;
const user2Ativo = false;
 

console.log(typeof nomeCliente1,nomeCliente1); // verifica o tipo da variável passando o nome da variável pela segunda vez podemos acessar o conteúdo dela.
console.log(typeof numero1, numero1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno); // Null no JavaScript é um objeto.


const a = [ 1, 2];
const b = a;
b.push(3);

console.log(a, b);

// Quando usamos atribuição por tipos primitivos ambos os valores apontam para o msm endereço de memória

let x =  3;
const y = x;

console.log(x, y);

x = 4;

console.log(x , y);