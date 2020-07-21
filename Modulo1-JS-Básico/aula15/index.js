// Aula 15: Funções 

function saudacoes(nome){
  return  `Bom dia ${nome}`
}

const funcao = saudacoes('Lucas');

console.log(funcao);

function soma (numero1, numero2){ // Tudo que estiver dentro da função fica protegido
  const resutado = numero1 + numero2;
  return resutado; // tudo que está abaixo do return não será executado
  console.log('Testando');
}

const  adicao = soma(1,2); // Podemos atribuir uma função para uma variável
console.log(adicao);

console.log(soma(3,3));

function multiplicacao(x = 2, y=2){ // Através dos novos recursos do ECMAScript podemos passar valores default como parâmetros para nossas funções
  const resultado = x * y;
  return resultado;
}

console.log(multiplicacao(3, 2));

const raizQuadrada = num => Math.pow(num,2); // Arrow Function -> funcão arrow

console.log(raizQuadrada(3));


// Função anônima 

const resto = function(num){
  return  num % 2
}

console.log(resto());