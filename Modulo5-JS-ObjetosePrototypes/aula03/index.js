// Aula 03: Getters e Setters

function Produto(nome, preco, estoque){

  this.nome = nome;
  this.preco = preco;
  

  // Quanto utilizamos get e setters eliminamos o value e o writable
  Object.defineProperty(this, 'estoque',{
    enumerable: true,
    get: function(){
      return estoque;
    },
    set: function(valor){
      estoque = valor;
      return estoque;
    },                                 
    configurable: true,
  });
}



const produto1 = new Produto('Liquidificador', 20, 3);

produto1.estoque = 20;

console.log(produto1.estoque);



// Teste de fixação
 // Função Construtora
function Aluno(nome, sobrenome, matricula){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // private string matricula
    
    Object.defineProperty(this, 'matricula',{
      enumerable:true,
      get:function(){ 
        return matricula;
      },

      set: function(valor){
        matricula = valor;
      },
      configurable:true
    });
}

const aluno1 = new Aluno('Lucas', 'Alves', '#7159ce');

console.log(aluno1.matricula);

aluno1.matricula = '3333';

console.log(aluno1.matricula)