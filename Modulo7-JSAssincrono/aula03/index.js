// Aula 03:  Async / Await 

// O async awai veio com o propósito de melhorar as Promises

function rand(min = 0, max =3 ){
  min *= 1000;
  max *=  1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if(typeof msg !== 'string'){
        reject('Cai no erro');
        return;
      }

      resolve(msg.toUpperCase() + '- Passei na promise');
      return;
    },tempo);
  });
}

/*
esperaAi('Frase 1', rand())
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Fase 2', rand());
  })
  .then( resposta=>{
    console.log(resposta);
    return esperaAi('Fase 3', rand());
  })
  .then( resposta =>{
    console.log(resposta);
  })
  .catch(erro => {
    console.log(erro)
  })
*/

// Async e await  -> nos permite executar promises de uma forma mais clear

async function exec(){
 try{
 const fase1= await esperaAi('Fase 1 ', rand()); // A acão será aguardada até ser executada ou cancelada
 console.log('Fase 1 ');
 const fase2 = await esperaAi('Fase 2', rand());
 console.log(' Fase 2 ');
 const fase3 = await esperaAi('Fase 3', rand());
 console.log(' Fase 3 ');
 console.log('Terminei de executar todas as funções');
 }catch(e){
   console.log('Não foi possível realizar a função');
 }
}

exec();

// Existem 3 estados para Promises
// Pendente => quanto a promise está executando , mas não retorna nada
// fullfiled => é uma representação de uma promise resolvida
// rejected => Quando uma promise foi rejeitada
