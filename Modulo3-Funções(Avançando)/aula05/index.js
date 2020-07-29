// Aula 05: Clousers 

// Clousers -> é a forma que o elemento tem de acessar o seu elemento pai dentro de uma função ex(variavel criada em espoco de bloco, consegui acessar  de função que tem acessar ao escopo global);
function criaFuncao(){
  const nome = 'Luiz';
  return function(){
    return nome;
  }
}


const funcaoCriada = criaFuncao();


