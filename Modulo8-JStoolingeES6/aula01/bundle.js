"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Aula 01: Babel  e "can i use"
// Babel -> è um transpilador de código que converte o nosso código js moderno para versões mais antigas
// Comandos para executar o babel -> 
// npm install --save-dev @babel/cli @babel/preset-env @babel/core
// Com essas comandos podemos usar o babel
var nome = 'Lucas';
var objeto = {
  nome: nome
};

var novoObjeto = _objectSpread(_objectSpread({}, objeto), {}, {
  marca: 'Samsung',
  modelo: 'XIS',
  teste: function teste() {
    console.log('Teste Executado');
  }
}); // Converter o arquivo index.js para um arquivo que os navegadores mais antigos compreendam
// npx babel index.js -o bundle.js --presets=@babel/env
// Podemos criar um script personalizado para automatizar nossas tarefas
