
'use strict';
require('es6-promise').polyfill();
const chance = require('chance').Chance();

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

var url = "http://www.cptm.sp.gov.br/Pages/Home.aspx";
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9';

exports.getStatusCPTM = function() {

  return new Promise(function(accept, error) {
    var options = {
      url:  url,
      headers: {
        'User-Agent': userAgent
      }
    };


request(url, function(err, resp, body) {

    if(err){
      console.log("Ocorreu um erro!");
      throw err;
    }

    var $ = cheerio.load(body);

    var _rubi = $('.rubi span').get(1);
    var _diamante = $('.diamante span').get(1);
    var _esmeralda = $('.esmeralda span').get(1);
    var _turquesa = $('.turquesa span').get(1);
    var _coral = $('.coral span').get(1);
    var _safira = $('.safira span').get(1);

    var rubi = {id: chance.string(),
                cor: "Rubi",
                linha: _rubi,
                status: $(_rubi).text(),
                imagem: "",
                descricao: "",
                msgStatus: $(_rubi).text(),
                codigo: ""
    }

    var diamante = {id: chance.string(),
      cor: "Diamante",
      linha: _diamante, 
      status: $(_diamante).text(),
      imagem: "",
      descricao: "",
      msgStatus: $(_diamante).text(),
      codigo: ""
    }

    var esmeralda = {id: chance.string(),
      cor: "Esmeralda",
      linha: _esmeralda, 
      status: $(_esmeralda).text(),
      imagem: "",
      descricao: "",
      msgStatus: $(_esmeralda).text(),
      codigo: ""
    }

    var turquesa = {id: chance.string(),
      cor: "Turquesa",
      linha: _turquesa, 
      status: $(_turquesa).text(),
      imagem: "",
      descricao: "",
      msgStatus: $(_turquesa).text(),
      codigo: ""
    }

    var coral = {id: chance.string(),
      cor: "Coral",
      linha: _coral, 
      status: $(_coral).text(),
      imagem: "",
      descricao: "",
      msgStatus: $(_coral).text(),
      codigo: ""
    }

    var safira = {id: chance.string(),
      cor: "Safira",
      linha: _safira, 
      status: $(_safira).text(),
      imagem: "",
      descricao: "",
      msgStatus: $(_safira).text(),
      codigo: ""
    }
    
    var lines = [rubi, diamante, esmeralda, turquesa, coral, safira];
    console.log(lines);
    //var json = JSON.stringify(yourArray);
    accept(lines);
  });
});
}

