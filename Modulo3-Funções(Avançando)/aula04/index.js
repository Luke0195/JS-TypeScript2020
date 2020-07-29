// Aula 04: Espoco Léxico

// O escopo lêxico -< A função conhece onde ela foi declarada o que tem dentro dela e sabe o que está em torno dela(fazendo referencia ao escopo global)

const nome = 'Lucas';

function realizaTeste(){
  console.log(nome);
}

realizaTeste();

function executaRealizaTeste(){
  realizaTeste();
}

executaRealizaTeste();


