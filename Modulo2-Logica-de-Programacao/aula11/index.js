// Aula 11: For in: Estrutura de repetição


const nomes = [ 'Lucas', 'Matheus', 'Igor', 'Vini', 'Diego', 'Mayke'];

for(let i  = 0 ; i<nomes.length; i++){
  console.log(`O indice ${i}º  possuí o valor ${nomes[i]}`);
}

// Usando o for in esse for retorna os indices do meu array

for(let indice in nomes){
  console.log(indice);
}

const obj = {    // Esse for retorna as chaves do meu objeto.
  nome: 'Computador',
  marca: 'Acer',
  preco: 2000
}

for(let chave in obj){
  console.log(chave, obj[chave]); // Conseguimos acessar o conteudo do objeto utilizando o for in, mas precisamos informar o obj 
}