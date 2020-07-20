 // Aula 10: Exercício com variáveis 
 
 let varA = 'A'; //B
 let varB = 'B'; // C
 let varC = 'C'; // A;
 let varD = varA;
 varA = varB; //B
 varB = varC; //C
 varC = varD; // A;

 console.log( varA,varB, varC);


 const [valor1, valor2, valor3] = [ 'A', 'B' , 'C'];
 let valor1 = valor[1];
 let valor2 = valor[2];
 let valor3 = valor[0];

 console.log(' Utilizando arrays');
 console.log(valor1, valor2,valor3);