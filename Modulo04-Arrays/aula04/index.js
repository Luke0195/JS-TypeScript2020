// Aula 04: Filter- Filtrando o array

// Retorne os números maiores que 10
const numeros = [ 5, 50 , 80 , 1, 2 , 3, 5 , 8 , 7 , 11, 15, 22, 27];

// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.



// Utilizando a função filter editamos o nosso array principal sobreescrevendo os valores principais

// Podemos criar a função fora do filter 
//function callbackFilter(valor){ // Se o valor for verdadeiro o valor será incluindo no novo array. podemos também passar os paramêtros de indice e array, mas o filter já consegui identificar o msm
//const  resultado = valor > 10 ? true : false;
//return resultado;
 // esse método uma função de callback que vai interagir com cara posição
//}


const filtraArray = numeros.filter(valor => valor > 10); // Utilizamos uma arrow  quando precisamos apenas do ava

console.log(filtraArray);
// Retorne as pessoas que tem o nome com 5 letras ou mais.
// Retorne as pessoas com mais de 50 anos.
// Retorne as pessoas cujo nome termina com a

const pessoas = [
  {nome: 'Luiz', idade:62},
  {nome: 'Maria', idade:23},
  {nome: 'Eduardo', idade:55},
  {nome: 'Leticia', idade:19},
  {nome: 'Rosana', idade:32},    
  {nome: 'Wallace', idade: 47}

];

const pessoasFiltradas = pessoas.filter(valor =>{
  if(valor.nome.length >= 5 &&  valor.idade > 50 &&  valor.nome.lastIndexOf('a')) {
    return valor;
  }
})

console.log(pessoasFiltradas);



// Usando um for
//const numerosMaioresQue10 = [];
//for(let valor  of numeros){
//if(valor >= 10)
//numerosMaioresQue10.push(valor);
//}console.log(numerosMaioresQue10);

