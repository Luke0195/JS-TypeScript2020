// Aula 02: Parâmetros da função

function funcao(){
  for(let argumento of arguments){
    console.log(argumento);
  }
}


funcao();

// Utilizando a variavel arguments podemos ver os argumentos que foram passados na função "armazena um cache", 
// Mais só é possivel acessar o valor do arguments pelo indice.
// Só é valido para funções literais



function teste(a, b = 0){ // Apartir do ECMA ES6 podemos atribuir valores padrões para os paramêtros de nossas funções.
  console.log(a + b);   // A uníca forma de podermos atribuir o valor padrão passado por parametro em uma variável é útilizando o valor undefined na chamada da função
}

teste(2);   

function conta( operador, acumulador, ...numeros){
  for(let numero of numeros){
    acumulador+=numero
  }
  console.log(acumulador);
}

conta('+', 0, 1,2,3,4,5);