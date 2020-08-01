// Testando a aplicação utilizando getter e Settes

// Criando atributos privatos
const _matricula = Symbol();
const _curso = Symbol();

// Getters e Setters : Métodos Acessores e Modificadores
class Aluno{
   constructor(nome,turno){
     this.nome = nome; // Atributo público 
     this.turno = turno;
     this[_matricula]= '';  // Atributo privado
     this[_curso] = '';
   }

   get matricula(){
    return this[_matricula];
  }

  set matricula(numMatricula){
    this[_matricula] = numMatricula;
  }

  get  getCurso(){
    return this[_curso];
  }

  set setCurso(valor){
    this[_curso] = valor;
  }

  info(){
    return ` O aluno ${this.nome} está cursando o bootcamp ${this.getCurso}, possui o nº de matricula ${this.matricula} e assiste as aulas no turno da ${this.turno}`
  }
}


const aluno1 = new Aluno('Mayke Brito', 'noite');
aluno1.matricula = 2020;
aluno1.setCurso = 'Launch Base';

console.log(aluno1.info());


const aluno2 = new Aluno ('Diego Fernandes', 'Manhã');
aluno2.matricula= 0007;
aluno2.setCurso = 'Go Stack';

console.log(aluno2.info());








