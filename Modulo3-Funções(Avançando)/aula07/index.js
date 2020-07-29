// Aula 07 : Funções Imediatas(IIFE) Immediately invoked function expression
// Tem como objetivo fugir do escopo  global

// Essa função tem acesso ao escopo globaal
function teste(){
  console.log('teste');
}

teste();

// Criando um função IIFE

// Podemos envolver tudo dentro de uma função para que ela não tenha acessao ao escopo global
(function(){ // Essa função é auto invocada inpedindo que o escopo global acesse essa variável
  console.log('');

 const nome= 'Lucas';

  function realizaTeste(){
    console.log(nome);
  }

  realizaTeste();
})();

