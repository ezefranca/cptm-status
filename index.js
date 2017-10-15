
'use strict';
require('es6-promise').polyfill();

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

    var rubi = $('.rubi span').get(1);
    var diamante = $('.diamante span').get(1);
    var esmeralda = $('.esmeralda span').get(1);
    var turquesa = $('.turquesa span').get(1);
    var coral = $('.coral span').get(1);
    var safira = $('.safira span').get(1);

    var rubiTxt = $(rubi).text();
    var diamanteTxt = $(diamante).text();
    var esmeraldaTxt = $(esmeralda).text();
    var turquesaTxt = $(turquesa).text();
    var coralTxt = $(coral).text();
    var safiraTxt = $(safira).text();

    var lines = {
      rubi: rubiTxt,
      diamante: diamanteTxt,
      esmeralda: esmeraldaTxt,
      turquesa: turquesaTxt,
      coral: coralTxt,
      safira: safiraTxt
    };
    accept(JSON.stringify(lines));
  });
});
}


