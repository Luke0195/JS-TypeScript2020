// Aula 04: Operação Ternária
// A operação ternári é representada por ? : 
//(condição) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario =999;

//if( pontuacaoUsuario >= 1000){
  //console.log('Usuário Vip');
//}else{
//console.log('Usuário normal');
//}

const nivelUsuario = pontuacaoUsuario >=100 ?  'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);


/* Exercícios   de fixação */

const usuario = 'XXX';
const senha =12345;

const usuarioLogado = ((usuario==='XXX') && (senha===12345)) ? 'Usuário XXX autenticado no sistema' : 'Erro ao logar favor confirmar a senha';
console.log(usuarioLogado);


const nota = 8;
const nomeAluno = 'Eduardo';

const resultado = (nota>=6) ? `O  aluno ${nomeAluno} foi aprovado` : `O aluno ${nomeAluno} foi reprovado`;
console.log(resultado);
