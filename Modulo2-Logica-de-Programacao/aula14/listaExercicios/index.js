// Exercicios de fixação

// Exercicio 1) Escreva uma função que receba 2 números e retorne o maior deles

function  retornaMaiorNumero(num1,num2){
  if(num1 > num2){
    console.log( `O primeiro número é maior que o segundo número`);
  }else if(num2 > num1){
    console.log(` O segundo número é maior que o primeiro número`);
  }else if( num1 === num2){
     console.log(` Os números são iguais`);
  }else{
    console.log('Opção porfavor informe números validos');
  }
}
retornaMaiorNumero('q', 'b');


// Escreva uma função chamda ePaisagem que recebe dois arguementos 
// Que recebe dois argumentos, largura e altura  de uma Imagem(number)
// Retorne  true  se imagem estiver no modo paisagem


const ePaisagem =(largura, altura)=> largura > altura;
console.log(ePaisagem(10,90));


function fizzBuzz(numero){
  if(typeof numero !== 'number') return numero;
  if(numero % 3 === 0 && numero % 5 === 0 ) return 'FizzBuzz';
  if(numero % 3 === 0 ) return 'Fizz';
  if(numero % 5 === 0 ) return 'Buzz';
  return numero;
}

for(let i =0 ; i<=100 ; i ++){
  console.log(i, fizzBuzz(i));
}