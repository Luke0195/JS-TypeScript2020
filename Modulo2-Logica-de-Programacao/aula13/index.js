// Aula 12: While e do While 


const nome = 'Luiz';
let controle = 0;

 while( controle<= nome.length ){
   console.log(nome[controle]);
   controle++;
 }

 console.log('Segue o fluxo...');

 
function geraNumeroAleatorio(min, max){
  const resultado = Math.random() * ( max - min) + min;
  return  Math.floor(resultado);
}

const min = 1 ;
const max = 50;
let rand= geraNumeroAleatorio(min, max);
console.log(rand);

while(rand !==10){
  rand = geraNumeroAleatorio(min,max)
  console.log(rand);
}

