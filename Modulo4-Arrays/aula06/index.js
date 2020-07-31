// Aula 06 : Reduce - Reduzindo o array
// Reduz todo os elementos em um só

// Some todos os números(reduce)
// Retorne um array com pares(Filter)
// Retorne um array com o dobro dos valores(Map)

const numeros = [ 5, 50 , 80 , 1 , 2 , 3 , 5, 8, 7 , 11 , 15 , 22 , 27];

const numerosSomados = numeros.reduce(function(acumulador, valor, indice, array){
  acumulador += valor;
  return acumulador;
},0);

console.log(numerosSomados);

// Na função reduce utilizamos 4 paramêtros o primeiro é o acumulador, valor, indice e array também podemos dizer qual será o valor inicial do acumulador

const arrayPares = numeros.reduce(function(acumulador, valor, indice, array){
  if(valor % 2 === 0){
    acumulador.push(valor);
  }
  return acumulador;
},[]);

console.log(arrayPares);