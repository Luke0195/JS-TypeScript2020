// Aula 07: Mais diferenças entre var e let


// Let tem escopo de bloco {...bloco}
// Var só tem escopo de função 

//const verdadeira = true;
//let nome = 'Luiz'; // Criando
//var nome2= 'Luiz' // Criando


//if(verdadeira){
  //let  nome ='Otavio'; // criando 
  //var nome2 = 'Rogerio'; // redeclarando

 //if(verdadeira){
  //  var nome2 = 'Ronaldo'; // redeclarando 
   // let nome = 'Outra coisa';
  //}
//}

//console.log(nome, nome2);

// O var tem tanto escopo de bloco como escopo de função

var sobrenome = 'Miranda';

function teste(){
  console.log(sobrenome);
 
}
teste();

// Podemos acessar as variavéis que estão em torno da minha função usando var
// Quando usamos let só temos o escopo de bloco

// Hoisting -> Içamento das variáveis  só funciona com var 

console.log(timeDeFutebol);

var timeDeFutebol = 'São Paulo';