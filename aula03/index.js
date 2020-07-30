// Aula 03: Concatenando Arrays

const array1 = [ 1 , 2 , 3 , 4 ];
const array2 = [ 5,  6 , 7 , 8 ];

// Ambos vão fazer o msm trabalho
// Mas o spread é mais utilizado
const array3 = array1.concat(array2);
const array4 = [...array1, ...array3];
console.log(array4);