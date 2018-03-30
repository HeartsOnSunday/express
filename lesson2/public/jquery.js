
var express = require('express');
var app = express();

//send index.html
//app.use(express.static('public'));
//app.get('/', function(request, response){
  //  response.sendFile(__dirname + '/public/index.html');
    //response.end();
//});

//defaults to sending back index.html and 
//serves all static files/assets under the specified folder
app.use(express.static('public'));

//app.get('/cities', )

//TEST THIS OUT
app.get('/', function(request, response) {
  console.log("Lets party");
  response.sendFile(__dirname + '/index.html');
});


app.use(function(request, response, next){
  if (request.path === "/blocks"){
    next();
  } else {
    response.status(404).json("Path requested does not exist");
  }
});


//route that returns cities
app.get('/blocks', function(request, response){
    var blocks = ['Matunuck', 'Narragansett', 'Westerly', 'Quonnie'];
    response.send(blocks);
    response.json(blocks);
    response.end();
});

app.listen(process.env.PORT, function(){
    console.log("listening on port " + process.env.PORT + "kids!!!");
});



