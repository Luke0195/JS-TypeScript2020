// Exercício de fixação 

const nome ='Lucas Alves ';
const sobrenome= 'Santos'
const nascimento = 1994;
const peso = 89;
const alturaEmMetros= 1.96;

const idade = 2020 - 1994;
const imc = peso /(Math.pow(alturaEmMetros,2));

console.log(`${nome}${sobrenome} tem ${idade} anos , nasceu em ${nascimento},pesa ${peso}`);
console.log(`tem ${alturaEmMetros} de altura  e seu IMC é de ${imc.toFixed(2)}` );