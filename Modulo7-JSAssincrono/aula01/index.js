// Aula 01: Promises

// As promises tem como objetivo aprimorar a utilização das callbacks

function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + (min));
}

function esperaAi(msg, tempo){
  return  new Promise((resolve, reject)=>{ // Resolve realiza o que deu certo, reject executa o que deu errado
    if(typeof msg  !== 'string' )reject('Bad Value')
    setTimeout(() =>{
      resolve(msg);
    },tempo);
  }); 
}

esperaAi('Fase 1', rand(1,3))
.then( resposta =>{
  console.log(resposta);
  return esperaAi(2222, rand(1,3));
})
.then(resposta =>{
  console.log(resposta);
  return esperaAi('Frase 3', rand(1, 3));
})
.then( resposta =>{
  console.log(resposta);
}).then( ()=>{
  console.log('Fim das execuções');
})
.catch(e =>{
  console.log('Erro', e);
});

/*  Se utilizassemos callback

esperaAi('Fase 1', rand(1 , 3), function(){
  esperaAi('Fase 2', rand(1 , 3), function(){
    esperaAi('Fase 3', rand(1 , 3), function(){

    });
  });
});

*/
