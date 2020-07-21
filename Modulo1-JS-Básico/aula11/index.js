 // Aula 11 :  Mais sobre strings 


 let nome = "O rato roeu a roupa do, rei de roma "; // Utilizando a \ antes da " podemos espacar das "
 // Podemos usar duas \\ para escapar do texto

 // As strings são indexadas no JavaScript com isso podemos acessar o índice de cada elemento

 console.log(nome[0]); // Acessando o primeiro elemento da string
 // Se tentarmos acessar o indice fora do range será retornado o undefined

 console.log(nome.charAt(1)); // retorna o elemento que está na posição.
 console.log(nome.charCodeAt(1)); // retorna o elemento na posição ascii.
 console.log(nome.concat('aleatório')); // Esse método cria uma concatenação com o elemento.
 console.log(nome.indexOf('texto'));  // Retorna o índice da palavra selecionada passada por parâmetro
 console.log(nome.lastIndexOf('texto')); // É similar ao indexOf mas começa de trás para frente
 console.log(nome.match(/[a-z]/g)); // é uma expressão regular 
 console.log(nome.replace('Um', 'Dois')); // Troca a palavra selecionada na string por outra palavra
 console.log(nome.replace(/r/g, '#')); // Também podemos usar expressões regulares no elemento replace
 console.log(nome.length); // retorna o tamanho da string 
 console.log(nome.slice(2,6)); // Esse método nos permite cortar a string em varios pecados
 console.log(nome.slice(-5)); // Quando usamos o negativo estamos pegando o valor total da string menos -5
 console.log(nome.split(' ')); // esse método separa todos os meus elmentos da string em um array
 console.log(nome.toUpperCase()); // converte a string para maiscula
 console.log(nome.toLowerCase()); // converte a string para minuscula


 const stringCortada = [ nome.slice(2,6), nome.slice(7,11), nome.slice(14,19)];

 console.log(stringCortada);

 console.log(nome.indexOf('e'));  // Retorna o índice da palavra selecionada passada por parâmetro



