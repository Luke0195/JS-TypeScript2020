// Aula 05: Constantes com const 
// Não podemos criar constantes com palavras reservadas
// Não pode começar o nome de uma constante com um número
// Não podem contem espaços ou traços
// Utilizamos camelCase
// Case-sensitive 
// Não podemos modificar o valor de uma constante
// Não utilize var, utilize const.
// Devemos sempre initilizar a constante com o valor 

 const nome = 'Lucas';
 console.log(nome.toUpperCase());

 const primeiroNumero = 5;
 const segundoNumero = 10;
 const resultado = primeiroNumero * segundoNumero;
 const resultadoDuplicado = resultado * 2;
 let resultadoTriplicado = resultado * 3;
 let resultadoTriplicadoSomado = resultadoTriplicado + 5;
 console.log(` O resultado da operação é ${resultado}`);
 console.log(` O valor duplicado do resultado é ${resultadoDuplicado}`);
 console.log(resultadoTriplicado);
 console.log(resultadoTriplicadoSomado);

 // Forma de verificar o tipo primitivo da variável
 console.log(typeof(primeiroNumero));
 
 
 