// Aula 02: Getters e Setters

// Symbol ->  tem como objetivo criar uma chave privada dentro da classe cada symbol retornado terá um id único, impedindo que o mesmo objeto tenha acesso ao msm symbol

const _velocidade = Symbol();

class  Carro{
   constructor(nome, modelo, marca){
     this.nome = nome;
     this.modelo = modelo;
     this.marca = marca;
     this[_velocidade]= 0; // Seria similar a um método setter
   }

   set velocidade(valor){
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
     this[_velocidade] = valor;
   }

   get velocidade(){
    return  this[_velocidade];
   }

   acelerar(){
    if(this[_velocidade] >=100) return;
    this[_velocidade]++
   }

   freiar(){
     if(this[_velocidade] <= 100) return;
     this[_velocidade] --
   }
}

const carro1 = new Carro('Fusca', '1.600', 'VW');

for(let i = 0 ; i <= 200; i++){
  carro1.acelerar();
}

console.log(carro1.velocidade);

