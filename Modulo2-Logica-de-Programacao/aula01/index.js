// Aula 01: Operadores de comparação

/** Operadores de comparação
 *  > maior que
 *  >=  maior que  ou igual a
 *  <  menor que 
 *  <= menor que ou igual a 
 *  == igualdade(valor)
 *  === igualdade estrita (valor e tipo)
 * != diferente(valor)
 * !== diferente estrito(valor e tipo) 
 * 
 * * */

const expressao = 10 > 5;
console.log(expressao);

const num1 =10;
const num2 = 11;
const comp =  num1 < num2;
console.log(comp);

const valor1 = 10;
const valor2 = '10';
const comparacao = valor1 == valor2; //  Verifica o conteúdo da variável
const comparacao1 = valor1 === valor2;
console.log(comparacao, comparacao1);

const comparandoNegacao= valor1 != valor2;
console.log(comparandoNegacao);

const comparaparacaoRestrita = valor1 !== valor2;
console.log(comparaparacaoRestrita)

