// Aula 10: Funções geradoras

// Permite executar os valores pausadamente

function* geradora1(){
  // Código qualquer ...
    yield 'Valor 1 ';
   // Código qualquer ...
   yield 'Valor 2';
  // Código qualquer ...
  yield 'Valor 3';

}

const g1 = geradora1();
console.log(g1.next()); // A função next nós permite acessar o valor da função como se fosse um pause
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

// Podemos acessar o conteúdo de uma função geradora usando o for.
for( let valor of g1){
  console.log(valor);
}

function* geradora2(){
  yield 0,
  yield 1,
  yield 2;
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);