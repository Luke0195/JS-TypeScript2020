const nomeCompleto = prompt('Informe o seu nome');
let conteudo = document.getElementById('conteudo');

conteudo.innerHTML+=`<p> Meu nome é ${nomeCompleto}`;
conteudo.innerHTML+=`<p> Seu nome tem ${nomeCompleto.length} letras </p><br/>`;
conteudo.innerHTML+=`<p> A segunda letra do seu nome é: ${nomeCompleto.charAt(1)}</p><br/>`;
conteudo.innerHTML+=`<p> Qual é o primeiro indice da letra  a no seu nome?: ${nomeCompleto.indexOf('a')}</p><br/>`;
conteudo.innerHTML+=`<p> Qual é o ultimo índice da letra a no seu nome ${nomeCompleto.lastIndexOf('a')}  </p><br/>`;
conteudo.innerHTML+=`<p> As últimas 3 letras do seu nome são: ${nomeCompleto.slice(-3)}</p><br/>`;
conteudo.innerHTML+=`<p>  As palavras do seu nome são: ${nomeCompleto.split(' ')} </p><br/>`;
conteudo.innerHTML+=`<p>  Seu nome com letras maiúsculas ${nomeCompleto.toUpperCase()} </p><br/>`;
conteudo.innerHTML+=`<p>  Seu nome coms minúsculas ${nomeCompleto.toLowerCase()} </p><br/>`