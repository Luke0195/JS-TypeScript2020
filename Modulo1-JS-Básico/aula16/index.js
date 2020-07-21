// Aula 16: Objeto (Básico)

const pessoa1 = {  // Nesse contexto de objeto o this faz referência a esse objeto
  nome: 'Lucas',
  sobrenome: 'Alves',
  idade: 26,
  info(){ // funções dentro de objetos são chamadas de métodos
    console.log(`Meu nome é completo é ${this.nome} ${this.sobrenome}  e minha idade é ${this.idade}`)
  },
  
  incrementarIdade(){
    this.idade++
  }
};

const pessoa2 ={
  nome: 'Maria',
  sobrenome: 'Oliveira',
  idade: 55
};

// Função Factory -> É uma função que cria objeto 
function criarPessoa(nome, sobrenome, idade){ // Os valores para a chamada da função são paramêtros
  return{
    nome,
    sobrenome,
    idade
  }
}


const pessoa3 = criarPessoa('Wlerisson', 'Henrique', 26); // para para atribuir a função são argumentos
console.log(pessoa3.sobrenome);

pessoa1.info();
pessoa1.incrementarIdade();
pessoa1.info();