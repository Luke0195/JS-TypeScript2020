// Aula 13: Objeto Math

// É o objeto para utilizar operações aritmeticas e outros

let  numero1 = 8.454;



console.log(Math.floor(numero1)); // Aredonda para baixo
console.log(Math.ceil(numero1));  // Aredonda para cima
let  numero2 = Math.round(3.5);  // de 5 para cima arronda para cima , menor que isso arredonda para baixo
console.log(numero2);
console.log(Math.max(4,3,5,6)); // Retorna o maior valor dentro do intervalo
console.log(Math.min(1,2,3,4)); // Retorna o menor valor dentro do intervalo
console.log(Math.random().toFixed(2)); // Retorna um numero aleatório

const aleatório = Math.round(Math.random() * ( 100 - 1) + 1);

//O JS nós permite fazer divisões por zero e esse resultado sempre nos retorna infinity(Precisamos tomar cuidado com isso)