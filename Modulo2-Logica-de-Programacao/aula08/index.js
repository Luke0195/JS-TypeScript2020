// Aula 08: Atribuição via desestruturação

//let varA = 'A';
//let varB = 'B';
//let varC = 'C';

//console.log(varA, varB , varC);

// Do lado esquerdo são as variáveis atribuidas e do lado direito são os valores que serão atribuitos

 //[varA, varB, varC] = [varB, varC, varA];

//console.log(varA,varB,varC);

//const numeros = [ 1, 2, 3];

//const [ x , y ,z ] = numeros;

//console.log(x,y,z);

const numeros = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

const [ ,numeroPar1,  , numeroPar2 , , numeroPar3, , numeroPar4] = numeros;
console.log('Numeros pares');
console.log(numeroPar1,numeroPar2,numeroPar3,numeroPar4);

const nomes = [ 'Diego', 'Mayke', 'Vini', 'Robson', 'Lucas'];
const [professor1, professor2, ...outrosNomes] = nomes;
console.log(professor1, professor2);
console.log(` Os outros nomes são ${outrosNomes}`);



// ... rest -> resto
//... spread -> espalha

const techs = [ 'Node', 'React', 'React-Native'];
const framework =[ 'Electron', 'Ember', 'Vue.JS' ,...techs, 'Meteor', 'jQuery'];

console.log(framework);

// Desestruturando uma lista de array

const listaArrays = [
  [1,2,3,4], [5,6,7,8], [9,10,11,12]
]

const [, array1, ] = listaArrays;

const numeroArray1 = array1[1]
console.log(numeroArray1);
