// Aula 04 : Métodos úteis para objetos

const produto = { nome:'Caneta' , preco: 1.80 };

const caneca  = Object.assign({}, produto, {material:'porcelana'}); // cria uma cópia do objeto produto; 
// Podemos atribuir novas chaves e valores com um terceiro paramêtro

console.log(caneca);

Object.freeze(caneca); // Congela o objeto impedindo de atribuir novas chaves e modificar os valores
caneca.qualidade = 'Ótimo';
console.log(caneca);

console.log(Object.values(caneca)); // Informa os valores do objet
console.log(Object.entries(caneca)); // Retorna uma array contendo as chaves e os valores


console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Retorna a descrição das propriedades da chave
// Se é enumarable, writable, enumerable

// Quando quiseremos apagar uma propriedade de um objeto usamos delete objeto.chave

for( let [chave, valor] of Object.entries(produto)){
  console.log(chave , valor);
}