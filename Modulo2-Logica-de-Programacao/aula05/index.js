// Aula05: Objeto Date 

 // Informações sobre o Marco 0

//const treshoras = 60 * 60* 3 * 1000; // calculando hora no JS
//const dia = 60 * 60  * 24 * 1000; // calculando o dia 60 = segundos 
//const data = new Date(0 + treshoras - dia); // Date é um objeto de uma função construtora
// Marco 0 -> 01/01/1970  Timestamp unix ou época unix
//console.log(data.toString());


//const data = new Date(2020, 3 , 20, 15, 14, 27); // ano, mes, dia, h, m , s, ms 
// Utilizando o objetivo date  começamos o mês com o valor 0, pe
//console.log(data.toString());

// Supondo que iriamos adicionar essas informações no banco de dados

const data = new Date('2019-04-20 20:20:59');
console.log(data.toString()); // converte a data para uma String
console.log('Dia', data.getDate()); // retona o dia 
console.log('Mes', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getMilliseconds());
console.log('Ms', data.getMilliseconds());

