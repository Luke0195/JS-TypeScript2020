// Aula 02: Object.defineProperty e Object.defineProperties

// defineProperty -> define uma propriedade do objeto
// defineProperties -> define varias propriedades do objeto

function Produto(nome , preco, estoque){
    this.nome = nome; // Adiciona o this atribuito o valor por paramêtro estamos dizendo que esse valor será publico
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{ // Estamos definindo a propriedade do atributo estoque.
      // 1º paramêtro é um  o objeto, 2º é a propriedade e o 3º é o conjunto de informações
      enumerable: true,  // mostra a chave se formos usar o for in ou Object.key
      value: estoque,
      writable: false, // Me diz se posso alterar ou não.
      configurable: false, // Se podemos apagar ou reconfigurar a chave   
    });

    Object.defineProperties(this, { // Quando utilizamos o defineProperties o objeto que queremos fazer referência 
      nome:{
        enumerable: true,
        value: nome,
        writable: false,
        configurable: false
      },

      preco:{
        enumerable: true,
        value: preco,
        writable: true,
        configurable: true
      }
    })
}

//const p1 = new Produto ('Camiseta' , 20 ,10);
//p1.estoque = 400;
//console.log(p1);
//p1.nome = 'Mochila';
//console.log(p1);
//delete p1.nome;
//console.log(p1);

 // Teste de fixação

function Aluno(cpf, nome, sobrenome, idade, curso, numCartaoCredito){
   this.cpf = cpf;
   this.nome = nome;
   this.sobrenome = sobrenome;
   this.idade = idade ;
   this.curso = curso;
   this.numCartaoCredito = numCartaoCredito; // Atributo público 

   Object.defineProperty(this,'numCartaoCredito',{
     enumerable: true,
     value:numCartaoCredito,
     writable: true,
     configurable:true

  
   });
}


const aluno1 =  new Aluno(000, 'Lucas', 'Santos', 26, 'Go Stack', 6262);
aluno1.nome= 'Ricardo';
console.log(aluno1);

delete aluno1.numCartaoCredito;
console.log(aluno1)



