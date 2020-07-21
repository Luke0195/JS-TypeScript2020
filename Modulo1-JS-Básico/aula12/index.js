// Aula 12: Mais sobre Numbers

let numero1 = 1;
let numero2= 2.5;


let soma = numero1 + numero2;
console.log(typeof (toString(soma)));
console.log(typeof soma);

let concatenaNumeros = String(numero1) + String(numero2);
console.log(typeof concatenaNumeros);

let numero3= 13.1312312312;
console.log(numero3.toFixed(2)); // Esse método arredonda 2 casas após a virgula
console.log(numero3.toString(2)); // Converte em binário
console.log(Number.isInteger(numero1)); // Esse método retorna se o número é inteiro ou não
console.log(Number.isNaN(NaN)); // Verifica esse é um Not a number