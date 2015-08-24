var express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res){
  console.log(req.params);
  res.render('index', {name: 'Sky'});
});

app.get('/:operation/:num1/:num2', function(req, res){
  var operation = req.params.operation,
      num1 = Math.round(Number(req.params.num1) * 100) / 100,
      num2 = Math.round(Number(req.params.num2) * 100) / 100;
  if (operation === "add"){
    res.sendStatus(num1 + num2);
  } else if (operation === "sub"){
    res.sendStatus(num1 - num2);
  } else if (operation === "mult"){
    res.sendStatus(num1 * num2);
  } else if (operation === "div"){
    res.sendStatus(num1/num2);
  }
});


app.listen(3000, function(){
  console.log('Server listening on localhost:3000');
});
