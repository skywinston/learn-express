var express = require('express'),
    app = express(),
    vegetables = [
        "Carrots",
        "Cucumber",
        "Peas"
         ];

// When a user visits the homepage...
app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/hello/:name', function(req, res){
  res.send( "Hello there, " + req.params.name );
})

app.get('/companies/:company/products/:productName', function(req, res){
  res.send( req.params.company + " makes the " + req.params.productName );
});

app.get('/greeting', function(req, res){
  var name = req.query.name;
  res.send("Hello to you, " + name);
});

app.get('/vegetables', function(req, res){
  res.send(vegetables.join(', '));
})

// Add another route
app.get('/meaning-of-life', function(req, res){
  res.send("42");
});

// Start the server to listen on port 3000
app.listen(3000, function(){
  console.log("Starting a server on localhost:3000");
});
