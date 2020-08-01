// Aula 03: Herança com classes


class DispositivoEletronico{
    constructor(nome){
      this.nome = nome;
      this.ligado = false;
    }

    ligarDispositivo(){
     if(this.ligado){
       console.log(`O dispositivo ${this.nome} já está ligado`);
       return;
     }

     this.ligado = true;
    }

    desligarDispositivo(){
      if(!this.ligado){
        console.log(`O dispositivo ${this.nome}  está desligado `);
        return;
      }
      this.ligado = false;
    }
}


const d1 = new DispositivoEletronico('Televisão');
console.log(d1);
d1.ligarDispositivo();
console.log(d1);
d1.ligarDispositivo();
console.log(d1);


// Usando herança de classes

class Smartphone extends DispositivoEletronico{
     
    constructor(nome,marca, modelo, cor, preco, ){
      super(nome); // Precisamos informar a super classes que estamos usando o atributo da classe pai.
      this.marca = marca;
      this.modelo = modelo;
      this.cor = cor;
      this.preco = preco;
    }

    smartphoneInfo(){
      console.log(`O nome do Smartphone é ${this.nome}`);
      console.log(`A marca do Smartphone é ${this.marca}`);
      console.log(`A cor do Smartphone é ${this.cor}`);
      console.log(`O preco do Smartphone é ${this.preco}`); 
      
    }
}


const xiaomi = new Smartphone('note7','Xiaomi', 'redmi', 'preto', 1.389,00);



xiaomi.smartphoneInfo();
