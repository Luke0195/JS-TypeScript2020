// Aula 08: Herança 

// Camiseta, caneca , lapis

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = valor => this.preco += valor;

Produto.prototype.desconto = valor => this.valor  -= valor;


function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco); // Linka as duas funções camiseta e Produto
}

const camiseta  = new Camiseta('Polo', 40, 'Preta');
camiseta.aumento(10);
console.log(camiseta);

