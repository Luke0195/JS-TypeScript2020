// Aula 02: Métódos úteis para Promises 

function rand(min, max){
  min *= 1000; // min= min * 1000
  max *= 1000; 
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject)=>{
    if(typeof msg !== 'string') reject(false);
  
    setTimeout(()=>{
      resolve (msg);
    },tempo);
  });
}

// Principais métodos para promises

// Promise.all -> Executa todas as promises e retorna todas as informações em um array

const promise = [//'Primeiro Valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
 // 'Finalizei todas as promises'
];

Promise.all(promise)
.then( function(valor){
  console.log(valor);
})
.catch(function(erro){
  console.log(erro);
})


// Promise.race -> retorna a primeira promessa encontrada e dps retorna todos os valores

Promise.race(promise)
.then(function(valor){
  console.log(valor);
})
.catch(function(erro){
  console.log(erro);
})
// Promise.resolve

function pageDownload(){
  const emCache = true;
  if(emCache){
    return Promise.resolve('Página em cache'); // Retorna se o resultado se for verdadeiro
  }else{
    return esperaAi('Fazendo o download', 300);
  }
}


pageDownload()
.then(dados =>{
  console.log(dados);
})
.catch(e => 
  console.log('Erro'));
// Promise.reject