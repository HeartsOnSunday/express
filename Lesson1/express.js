var express = require('express');
var app = express();
app.locals.moment = require('moment');

//route that returns 'Hello World'
app.get('/', function(request, response){
    response.send("Hello World");
    response.end();
});

//say my name
app.get('/name', function(request, response){
    response.send("Leah");
    response.end();
});

//redirect
app.get("/redirect", function(request, response){
    response.redirect(301, '/surprise');
    response.end();
});

//date
app.get("/date", function(request, response){
    response.moment(Date.now()).format('MM/DD/YYYY');
    response.end();
});

app.listen(8080, function(){
    console.log("listening on port 8080 kids!!!");
});



