// Aula 07: Manipulando Prototypes

// new Object -> Object.prototype

  function  Produto(nome, preco){
      this.nome = nome;
      this.preco = preco;
  }

  Produto.prototype.infoProduto = function(nome, preco){
    return ` O nome do produto é ${this.nome}  e o preco é ${this.preco}`;
  }

  const produto1 = new Produto('Noteobook', 2000);

  console.log(produto1.infoProduto());

  const p2 ={ // Quando adicionamos objetos literais no nosso código que queremos usar herança devemos especificar  a herança
    nome: 'Caneta',
    preco: 20
  } 

  Object.setPrototypeOf(p2, Produto.prototype);
  console.log(p2.infoProduto());


/*
const objA = {
  chaveA: 'A'
// __proto__: Object.prototype
}

const objB = {
  chaveB: 'B',
}

const objC = new Object();


Object.setPrototypeOf(objB, objA); //  Esse método nos permite criar uma herança direta entre B e A onde B herda todos os atributos de A

Object.setPrototypeOf(objC,objB);
console.log(objB.chaveA);


console.log(` Acessando os atributos pelo objeto C ${objC.chaveA} ${objC.chaveB}`);

// Mdn nos sugere que devemos usar o Object.setPrototypeOF (utilizar __proto__) pode nos atrapalhar no quesito de performace
*/