
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/blocks', function(request, response){
    var blocks = ['Providence, Rhode Island', 'Boston, Massachusetts', 'Westerly, Rhode Island', 'Newport, Rhode Island', 'Brooklyn, New York'];
    console.log()
    response.json(blocks);
});


app.listen(process.env.PORT, function(){
    console.log("listening on port " + process.env.PORT + "kids!!!");
});

//save for later
//<option value="audi">Audi</option>