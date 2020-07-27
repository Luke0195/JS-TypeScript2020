//  Aula 09: Atribuição via desestruturação (Objetos)


const pessoa = {
  nome: 'Lucas',
  sobrenome : 'Santos',
  idade: 26,
  endereco:{
   rua: 'Avenida Brasil',
   numero: 320
  }
}


// Atribuição via desestruturação
// Podemos atribuir um novo nome para as chaves do objeto

 // Podemos setar um valor padrão para obj para não retornar undefined

 // Podemos apelidar o nome das chaves com os :
const{ endereco:{ rua: r, numero: n} ,endereco} = pessoa; // desestrurando um objeto dentro de outro objeto

console.log(r, n);

const {nome , ...resto} = pessoa;

console.log(resto);