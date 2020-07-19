// Aula 04: Variáveis com let 

let nome; // Variaveis não inicializadas são definidads como undefined 
nome = 'Fernando'// Inicializando a variável
console.log(nome);
nome = 'Igor';



console.log(nome, ' nasceu em 1994');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho  com ', nome,' em 2015');
console.log('O filho de ', nome , 'se  chama Eduardo');

// Não podemos redeclarar uma variável let com a palavra reservada let
// Não podemos criar variáveis com palavras reservadas 
// Variáveis precisam ter nomes significativos 
// Não devemos começar o nome de uma variável com um número
// Uma boa prática é usar camelCase 
// Variáveis não podem conter espaços ou traços 
// As variáveis no javaScript são case-sensitive: Letras maisculas e minusculas fazem diferença 
// Para uma boa pratica todas as variáveis que vão variar use let e não var.
 
console.log(Yusuke)