
var express = require('express');
var app = express();

app.use(express.static('public'));


var blocks = {
    'Providence': 'Rhode Island', 
    'Boston': 'Massachusetts', 
    'Westerly': 'Rhode Island',
    'Newport': 'Rhode Island',
    'Brooklyn': 'New York'
};

//route to get keys from blocks
app.get('/blocks', function(request, response) {
    response.json(Object.keys(blocks));
})

//creare an efficient dynamic route
app.param('name', function(request, response, next) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    
    request.blockName = block;
    next();
});
//dynamic route to cities to return description(State)

app.get('/blocks/:name', function(request, response){
    console.log("Lets party in the terminal");
    //var name = request.params.name;
   // var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    var description = blocks[request.blockName];
    if (!description) {
        response.status(404).json("No description found for" + request.params.name);   //false
    } else {
        response.json(description);  //true responds with state that city is in
    }
    
});












// function to search cities inside of blocks

function citySearch (keyword) {
    var regexp = RegExp(keyword, 'i');
    var result = blocks.filter(function (city) {
        return city.match(regexp);
    });
    return result;
}





app.listen(process.env.PORT, function(){
    console.log("listening on port " + process.env.PORT + " kids!!!");
});

//save for later
//<option value="audi">Audi</option>

/*
  if (request.query.limit >= 0) {
        response.json(blocks.slice(0, request.query.limit));
    } else {
       response.json(blocks); 
    }
*/
