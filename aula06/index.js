//  Aula 06 : Prototypes 

// Função Construtora => molde (classe)

function Pessoa( nome, sobrenome ){
  this.nome = nome;
  this.sobrenome = sobrenome;
}


Pessoa.prototype.teste = 'Testando';


// instância
const pessoa1 = new Pessoa('Lucas', 'Santos');
const pessoa2 = new Pessoa('Caio', 'Lima');


// O javaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.
// prototype -> é um objeto referenciado da minha função construtora ou seja qualquer atribuito que Pessoa.prototype tiver os objetos instânciados da minha função
// Também teram o msm valor

// O pai de todos os objetos é Object Prototype

// Todos os objetos tem uma referência interna para um protótipo(__proto__) que vem da propriedade prototype da função construtora que foi 
// usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar esse membro no proprio objeto
// e depois a cadeia de protótipos é usada o topo(null) até encontrar (ou não) tal membro
Pessoa.prototype.info = function(nome,sobrenome){
  return ` Meu nome completo é ${this.nome} ${this.sobrenome} `
}


console.log(pessoa1.info());

