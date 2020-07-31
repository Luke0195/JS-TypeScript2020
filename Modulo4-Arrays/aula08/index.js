// Aula 08: forEach

// Só é possivel utilizar esse método dentro de arrays 

const numeros = [ 1, 2, 3, 4, 5, 6, 7 , 8];


// O forEach nos permite apenas interar sobre os valores do array
let a =0;
numeros.forEach(valor => {
  a += valor;
});

console.log(a);


