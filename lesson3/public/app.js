var express = require('express');
var app = express();

 var blocks = {
   'Matunuck': 'Oyster Bar', 
   'Narragansett': 'Beer', 
   'Westerly':  'Misquamicut',
   'Quonnie': 'TJs House'
   };

//route that returns cities
app.get('/blocks/:name', function(request, response){
   var description = blocks[request.params.name];
   if (!description) {
      response.status(404).json('No description found for ' + request.params.name);
     } else {
     response.json(description);
   }
   //defaults to 200 status code
});

app.listen(process.env.PORT, function(){
    console.log("listening on " + process.env.PORT);
});



