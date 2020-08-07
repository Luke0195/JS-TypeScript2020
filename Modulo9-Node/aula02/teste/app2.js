const path = require('path');



// Isso retorna o caminho absoluto deis da raiz da maquina
console.log(__filename); // Nome do arquivo 
console.log(__dirname); // Caminho do arquivo

console.log(path.resolve(__dirname, '..', '..','..','Modulo4-Arrays')); // mostra o caminha atual  independente do SO




/*
const Produto = require('./B/C/D/mod2').Produto;
const funcao = require('./B/Z/index');

const produto2= new Produto('TV', 1500);
produto2.info();

console.log('-------------------');


const produto1 = new Produto('notebook', 200);

produto1.info();

funcao();
*/
// Quando queremos ir para um diretório que está para frente usamos o .
