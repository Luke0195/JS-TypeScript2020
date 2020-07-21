// Aula 17: Valores primitivos e valores por referência 

/* Tipos Primitivos(imutaveis) String, number, boolean, undefined, null, (biginit, symbol)*/

// let nome = 'Lucas';
// nome[0]='R';
// console.log(nome);

//let a = 'A';
//let b = a; // Cópia do valor de a quando o valor é primitivo
//console.log(a, b);
//a='AB';
//console.log(a, b);

 // Referência (mutável) Os valores são passados por referência  - array, object , function

 let a = [1, 2, 3];
 let b = a;   // Tanto a como b apontam para o mesmo endereço de memória

 console.log(a,b);

 a.push(4,5,6,7,8,9,10);
 console.log(a,b)
b.pop();
console.log(a, b);

