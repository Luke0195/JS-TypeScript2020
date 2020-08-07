class Produto{
  constructor(nome, preco){
    this.nome = nome;
    this.preco = preco;
  }

  info(){
    console.log(' Informações do produto ');
    console.log(` O nome do produto é ${this.nome}`);
    console.log(` O preço do produto é ${this.preco}`);
  }
}

const multi = (x , y) => x * y; // Arrow 



module.exports ={
  Produto,
  multi
}