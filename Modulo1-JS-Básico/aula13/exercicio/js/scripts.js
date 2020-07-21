const numero = Number(prompt('Informe o primeiro número'));
const  numeroSelecionado = document.getElementById('numero-selecionado');
const conteudo = document.getElementById('conteudo');

numeroSelecionado.innerHTML = numero; // Podemos atribuir uma variável dentro do html

conteudo.innerHTML+= `<p> Raiz quadrada: ${Math.sqrt(numero)}<p><br/>`;
conteudo.innerHTML+=`<p> ${numero} é inteiro: ${Number.isInteger(numero)}<p><br/>`;
conteudo.innerHTML+=`<p> É NAN ${Number.isNaN(numero)}<p> </br>`;
conteudo.innerHTML+=`<p> Arredondado para baixo ${Math.floor(numero)}<p> <br/>`;
conteudo.innerHTML+=`<p> Arredondado para cima ${Math.ceil(numero)}<p> <br/>`;
conteudo.innerHTML+=`<p> Com duas casas decimais ${numero.toFixed(2)}<p> <br/>`;