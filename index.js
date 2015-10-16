var express = require('express');
var app = express();
var expressHbs = require('express3-handlebars');

app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
  res.render('index', {});
});
app.get('/cartography', function(req, res){
  res.render('cartography', {});
});

app.listen(8000);