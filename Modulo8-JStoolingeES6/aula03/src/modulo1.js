
const empresa = 'Rocketseat';
const nome = 'Aberto';
const sobrenome = 'Santos';
const idade = 30;

function soma(x , y){
  return x + y;
}

export function teste(){
  console.log('teste')
}

export class Aluno{
  constructor(nome,curso){
    this.nome = nome,
    this.curso = curso
  }

  infoAluno(){
    console.log('Informações do aluno');
    console.log(` O nome do aluno é ${this.nome}`);
    console.log(` O curso do aluno é ${this.curso}`);
  }
}

// Metódo de se exportar um módulo utilizando o ES6 

//export{ nome , sobrenome , idade , soma};

export default empresa;
