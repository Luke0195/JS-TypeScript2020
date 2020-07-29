// Aula 03: Retorno da função

// return 
// Retorna um valor
// Termina a função

function soma(a,b){
  return a + b; // retorna o valor
}

function soma2(a,b){
  console.log(a + b); // informa a soma
}

soma2(2,3);

function criaPessoa(nome, sobrenome){
   return{
      nome,
      sobrenome
   }
}


const pessoa1 =  criaPessoa('Lucas', 'Alves');



function falaFrase(comeco){
  function falaResto(resto){
    return  comeco + ' ' +resto
  }

  return falaResto;
}

const olaMundo = falaFrase('Olá');

console.log(olaMundo('Mundo!'));

function duplicaValor(n){
  return n * 2;

  
}

function triplicaValor(n){
  return n * 3;
}

function quadriplicaValor(n){
  return n * 4;
}

console.log(duplicaValor(2));
console.log(triplicaValor(2));
console.log(quadriplicaValor(2));


// Forma de automatizar a criação de variás funções

function criaMultiplicador(num){
   
    function multiplicaValor(valor){
      return valor * num;
    }

    return multiplicaValor;
}

function criaMultiplicador2(multiplicador){
   return function(n){
     return n * multiplicador;
   }
}

const multiplicador = criaMultiplicador(2);
console.log(criaMultiplicador(2)(3));