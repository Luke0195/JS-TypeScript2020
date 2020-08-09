// Aula 04: Função FileSystem e Recursão mútua
// Essa função nos permite ler arquivos no node

const fs = require('fs').promises;
const path = require('path');



 async function readdir(rootDir){
   rootDir = rootDir|| path.resolve(__dirname);
  const response = await fs.readdir(rootDir);
  console.log(response);
 }


 readdir();
