

class Pessoa{
  constructor(nome){
    this.nome = nome;
  }
}

function teste(){
  console.log('teste');
}

const empresa = 'Rocketseat';

module.exports ={
  Pessoa, teste, empresa
}






/*
const nome = 'Lucas';
const sobrenome = 'Santos';

const  info = () =>{
  console.log(nome,sobrenome);
}

// Forma padrão de se exportar algo do módulo

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.info = info;

// Forma abreviada para se exportar algo do módulo

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.info = info;

// No contexto de módulos o this faz referência ao exports e ao module.exports


this.teste = 'Olá Mundo !';

*/
