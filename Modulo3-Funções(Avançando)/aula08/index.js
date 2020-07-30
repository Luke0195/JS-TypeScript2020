// Aula 08: Funções Fabrica(Factory Functions)

// É uma função que cria objetos
function criarPessoa(nome,sobrenome){
  return{
    nome,
    sobrenome,
    falar(assunto){
      return ` ${this.nome} está falando sobre ${this.sobrenome}`;
      
    }
  };
}

const p1 = criarPessoa('Lucas', 'Santos');

console.log(p1.falar('Tecnologia'));


