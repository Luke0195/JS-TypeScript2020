// Aula 05:  Map - Mapeando o array

// A função map altera os valores do array

// Diferença de filter e map: no filter se a condição for verdadeira o valor é filtrado senão o valor não será filtrado
// O map sempre terá o mesmo tamanho do array original diferente do filter 
// Dobre os números
const arrayNumeros = [5, 50 , 80 , 1 , 2 , 3 , 5 , 8 , 7 , 11 , 15 , 22 , 27];
const arrayMapeado  = arrayNumeros.map(valor => valor * 2);
console.log(arrayMapeado);


// Para cada elemento
// Retorne apenas uma string com o que nome da pessoa
// Remova apenas a chave nome do objeto 
// adicione  uma chave id em cada objeto

const pessoas =[
  { nome:'Luiz' , idade: 62},
  { nome:'Maria' , idade: 23},
  { nome:'Eduardo' , idade: 55 }, 
  { nome:'Léticia' , idade: 19},
  { nome:' Rosana' , idade: 32},  
  { nome:'Wallace' , idade: 47},
];


const mapeaNomeObjeto = pessoas.map(valor  => valor.nome );

const mapeaIdade = pessoas.map(valor => (({idade: valor.idade})));
  //return {idade: valor.idade});
console.log(mapeaIdade);


const adicionaIds = pessoas.map(function(valor, indice){
  //valor.id = indice; Os valores do array principal também serão alterados porque estão sendo passados por referência
   const newObj = {...valor}
   newObj.id = indice + 1;
   return newObj
});


console.log(pessoas);
console.log(adicionaIds);
