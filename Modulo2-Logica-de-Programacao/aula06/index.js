// Aula 06: Switch Case
// Os dias da semana começam do 0 ao 7 sendo 0 domingo e 7 sabádo
const data = new Date('1987-04- 21 00:00:00');
const diaSemana = data.getDay();
let  diaSemanaTexto;


if(diaSemana === 0){
diaSemanaTexto ='Domingo';
}else if( diaSemana ===1){
  diaSemanaTexto='Segunda';
}else if(diaSemana === 2){
  diaSemanaTexto = 'Terça';
}else if(diaSemana === 3){
  diaSemanaTexto='Quarta';
}else if(diaSemana === 4){
  diaSemanaTexto='Quinta';
}else if(diaSemana === 5){
  diaSemanaTexto='Sexta';
}else if(diaSemana === 6){
  diaSemanaTexto='Sábado';
}else{
  diaSemanaTexto='Valor invalido';
}

console.log(diaSemana, diaSemanaTexto);

// Usando o switch

switch(diaSemana){
  case 0:
    console.log('Hoje é domingo');
    break;

  case 1:
    console.log('Hoje é segunda');
    break;
  
  case 2:
    console.log('Hoje é terça');
    break;
  
  case 3:
    console.log('Hoje é quarta');
   break;
  
  case 4:
    console.log('Hoje é quinta');
    break;
  
  case 5:
    console.log('Hoje é sexta');
    break;

  case 6: 
    console.log('Hojé é sabádo');
    break;
  
  default:
    console.log('Opção invalida');
  break;
}
