// Aula 01: Revisão sobre objetos

// Crição de objeto de forma literal

const pessoa ={

  nome: 'Lucas',
  sobrenome: 'Otavio',
};

// Podemos acessar o valor do objeto com a notação de . e []
console.log(pessoa['nome']);

// Podemos atribuir uma chave em uma váriavel e acessar o conteúdo dela dentro do objeto

const chave ='nome';
console.log(pessoa['nome']);

// Podemos criar um novo objeto atráves da palavra reservada new

const pessoa1 = new Object();
pessoa1.nome = 'Fernando',
pessoa1.idade = 26;
pessoa1.sexo = 'Masculino';

console.log(pessoa1);

// Método para apagar uma chave do meu objeto
//delete pessoa1.nome;

pessoa1.teste = function(){ // Podemos criar um metódo atráves de uma atribuição
  console.log('Testando o teste');
}


pessoa1.teste();

pessoa1.info = function(){
  return (`${this.nome} está falando seu nome`);
}

console.log(pessoa1.info());


pessoa1.getDataNascimento = function(){
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());


// Acessando as chaves do objetos

//for( let chave in pessoa1){
//console.log(pessoa1, pessoa1[chave]);


// Podemos criar objetos tanto com Factory functions/  Construtor functions e Classes


// Função Factory(Fábrica)
function criaAluno(nome, sobrenome, idade, curso , professor){
      return{
        nome,
        sobrenome,
        idade,
        curso,
        professor
      }
}


const aluno1 = criaAluno('Lucas', 'Santos', 26, 'Go Stack', 'Diego Fernandes');
const aluno2 = criaAluno('Maria', 'Silva', 23, 'Launch Base', 'Mayke Brito');

function Aluno( nome, sobrenome , idade, curso , professor){
   this.nome = nome;
   this.sobrenome = sobrenome;
   this.idade = idade;
   this.curso = curso;
   this.professor = professor;
}

const aluno3 = new Aluno('Igor', 'Fernandes', 18, 'Go Stack', 'Diego Fernandes');

console.log(aluno3);