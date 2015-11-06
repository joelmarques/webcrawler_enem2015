/*
  Busca todos os links de todas as questões do segundo dia da prova do enem 2015
*/
var request = require('request');
var cheerio = require('cheerio');
var urlbase = "http://www.curso-objetivo.br/vestibular/resolucao_comentada/enem/enem2015_2dia.asp?img=01";
request(urlbase, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        // console.log(body);

        $ = cheerio.load(body);

        $('table td a').each(function(index,value){
          /*itera cada td*/
          var obj = {};

          obj.questao = $(this).text();

          var linkCompleto = new String($(this).attr('href'));

          var sep1 = linkCompleto.split('("').pop();

          obj.link = sep1.split('",').shift();

          console.log(obj);
        });
    }
})
