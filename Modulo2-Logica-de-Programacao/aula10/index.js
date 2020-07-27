// Aula 10 : Estrutura de repetição for(Clássico)

//console.log('Linha 0');
//console.log('Linha 1');
//console.log('Linha 2');
//console.log('Linha 3');
//console.log('Linha 4');
//console.log('Linha 5');

for( let i= 0; i <= 5 ; i++ ){
  console.log(`Linha ${i}`);
}


// Verificando se os números são pares

for(let i = 0; i<=10 ; i++){
  const par = i % 2 === 0 ? `${i} é um numero par` : `${i} não é um numero par`;
  console.log(par);
}

const nomes = ['Eduardo', 'Mônica', 'Matheus', 'João'];

for(let i =0 ; i< nomes.length; i++){
  console.log(`O indice ${i}º possui o valor ${nomes[i]}`);
}