// Aula 08: Operadores aritméticos, de atribuição e incremento

/** Aritméticos
 * + => soma/ concatenação
 * - => subtração
 *  => multiplicação
 *  ** => potenciação 
 *  % => resto
 */


 const numero1 = 2;
 const numero2 = 10;
 const concatenacao = numero1 + String(numero2);
 const potenciacao = numero1 ** numero2;
 const resto = numero2 % numero1

 console.log(numero1 + numero2);
 console.log(typeof(concatenacao));
 console.log(potenciacao);
 console.log(resto);


 /* Precendência para ela equações na programação
 /**
  * () 
  * **
  * / %
  * +
  * - 
  * */ 
 

  // Operador de incremento
  let contador =1 ;
  contador++;
  contador++;
  contador++;
  contador++;
  console.log(contador);

  let contador1 = 1;
  console.log(++contador1); // pre-incremento

  contador--; // pós-decremento
  --contador; // pré-decremento

 let passo = 0;
 passo = passo + 2;
 console.log(passo);
 passo *= 2;
 console.log(passo);

 // Converter uma string para numner

 let numero3 = Number('4');
 console.log(typeof numero3, numero3);

 console.log(typeof numero3, numero3);



 console.log(typeof numero3, numero3);
 