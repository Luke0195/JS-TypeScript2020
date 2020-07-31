// Aula 07: Filter + Map + Reduce 

// Combinando os 3 métodos em um só

//Filtrar pares
// Dobrar valores
// Reduzir (somar tudo)

const numeros = [ 5, 50 , 80, 1, 2, 3, 5, 8 , 7 , 11 , 15, 22 , 27 ];
// Primeira forma atribuindo tudo em variaveis separadas
const numerosPares  = numeros.filter( valor => valor % 2 === 0);
const dobrarValores = numerosPares.map( valor => valor * 2);
console.log(numerosPares);
console.log(dobrarValores);
const somatorioValores = dobrarValores.reduce(function(acumalador, valor){
    acumalador = acumalador + valor;
    return acumalador
},0);
console.log(somatorioValores);

// Encadeamento de funções

const resultadoFinal = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce(function(acumalador, valor){
  acumalador =  acumalador + valor;
  return acumalador;
},0);

console.log(resultadoFinal);

