// Exercicio de fixação


function temporizador( min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + (min));
}
function soma(x, y){
   return x + y ;
}

function sub(x, y){
  return x - y;
}

function multiplicacao(x , y){
  return  x * y;
}

function divisao(x , y){
  return  x / 2;
}

function execFuncao(msg, funcao){
  return new Promise((resolve, reject)=>{
    if(funcao !== Number) reject('Não foi possivel realizar o calculo');
    setTimeout(()=>{
      resolve(msg)
    },funcao);
  })
}

execFuncao('Adicao',temporizador(1,3))
.then(resposta =>{
  console.log(reposta);
})


