

function meuEscopo(){
 const formulario = document.querySelector('.formulario');
 const resultado = document.querySelector('.resultado');
 const pessoas = [];
 
 function recebeEvento(evento){
   evento.preventDefault();
   const nome = formulario.querySelector('.nome');
   const sobrenome = formulario.querySelector('.sobrenome');
   const peso = formulario.querySelector('.peso');
   const altura = formulario.querySelector('.altura');

   const obj ={
     nome:nome.value, 
     sobrenome: sobrenome.value,
     peso: peso.value,
     altura:altura.value,
   }
   
   pessoas.push(obj);

   resultado.innerHTML ='<h1>  Informações do usuario cadastrado</h1> <br/>';
   resultado.innerHTML+=`<p> ${obj.nome} ${obj.sobrenome} ${obj.peso} ${obj.altura} </p>`;
  
   console.log(pessoas)

 
}
 formulario.addEventListener('submit', recebeEvento);






}

meuEscopo();

