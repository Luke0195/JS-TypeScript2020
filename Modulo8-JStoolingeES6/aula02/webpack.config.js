const path = require('path');

module.exports = {
  mode: 'development', // Estamos trabalhando em desenvolvimento 
  entry:'./src/index.js', // Arquivo contendo o JS atual
  output: { // Arquivo para onde vai o JS compilado
  path:path.resolve(__dirname, 'public', 'assets', 'js' ), // O path.resolve nos ajuda com a caminho de arquivos __dirname -> diretório atual
  filename: 'bundle.js' // nome do nosso arquivo
  },

  module:{
    rules:[{
      exclude: /node_modules/, // Nós permite monitorar certos arquivos que não queremos que seja monitorado
      test: /\.js$/,
      use:{
        loader: 'babel-loader', // Qual será o loader dele
        options:{
          presets:['@babel/env']
        }
      }
    }]

  },
  devtool: 'source-map' // Faz o mapeamento do nosso código então o devtool nos ajuda no mapeamento das interface
  
};