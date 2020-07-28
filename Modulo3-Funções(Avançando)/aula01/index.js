// Aula 01: Maneiras de declarar funções


// Forma literal 

 function teste(){
   console.log('Teste Executado');
 }

 // Function expression
 const realizaTeste = function (){
   console.log('Teste Executado')
 }

 // Arrow Function
 const realizaTesteArrow = () => console.log('Teste Executado');


 // Sempre ira ocorrer o (function hosting) içamento de função para funções declaradas de forma literal
 // Tendo o hosting é possivel executar a função antes dela ser declarada no escopo global

 // First-class objeccts (Objetos de primeiros classes) -> é possivel tratar funções como dado atribuindo uma função em uma variável


function executaFuncao(funcao){
  console.log('Sua função será executada logo a baixo');
  funcao();
}


executaFuncao(teste);



