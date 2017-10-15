# API simples Lista de status das linhas da CPTM

[![npm](https://img.shields.io/npm/v/cptm-status.svg)](https://www.npmjs.com/package/cptm-status)
[![npm](https://img.shields.io/npm/dm/cptm-status.svg)](https://www.npmjs.com/package/cptm-status)

O **cptm-status** é um módulo para consulta do status das linhas da CPTM.

## Instalação

```npm install cptm-status --save ```

## Exemplos

### GET status

```js

const lines = require('cptm-status');

lines.getStatusCPTM().then(function(result) {
	console.log(result);
}, function(err){
	console.log(err);
});

```

#### Objeto de Retorno

```js
{"rubi":"Velocidade Reduzida",
"diamante":"Velocidade Reduzida",
"esmeralda":"Operação Parcial",
"turquesa":"Operação Normal",
"coral":"Velocidade Reduzida",
"safira":"Velocidade Reduzida"
}
```

#### Objeto de erro

```js
{ error: 'Não foi possível retornar as informações!' }
```



