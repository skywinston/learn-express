var express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res){
  console.log(req.params);
  res.render('index', {name: 'Sky'});
});

app.get('/add/:num1/:num2', function(req, res){
  var num1 = Number(req.params.num1),
      num2 = Number(req.params.num2);
  res.sendStatus(num1 + num2); // tried using res.send, but its deprecated
});

app.get('/sub/:num1/:num2', function(req, res){
  var num1 = Number(req.params.num1),
      num2 = Number(req.params.num2);
  res.sendStatus(num1 - num2);
});

app.get('/mult/:num1/:num2', function(req, res){
  var num1 = Number(req.params.num1),
      num2 = Number(req.params.num2);
  res.sendStatus(num1 * num2);
});

app.get('/div/:num1/:num2', function(req, res){
  var num1 = Number(req.params.num1),
      num2 = Number(req.params.num2);
  res.sendStatus(num1/num2);
});

app.listen(3000, function(){
  console.log('Server listening on localhost:3000');
});
