// Aula 04: Métodos  de instância e estáticos 

// Métodos estáticos são métodos que podemos acessar a classe sem utilizar a palavra reservada new

class Controller{
   
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume(){
   this.volume ++;
  }
  // Método de Instância
  diminuirVolume(){
    this.volume --;
  }

  // Método de estáticos
   static trocaPilha(){  // Utilizando a palavra static antes do método estamos dizendo, que a nossa classe controller terá um método sem precisar ser instânciada
      console.log('Trocando pilhas...');
      console.log('Pilhas trocadas');
  }
}

const controle = new Controller('Samsung');

controle.aumentarVolume();
controle.aumentarVolume();
console.log(controle.volume);

Controller.trocaPilha();



