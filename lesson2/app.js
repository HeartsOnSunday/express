
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/blocks', function(request, response){
    var blocks = ['Matunuck', 'Narragansett', 'Westerly', 'Quonnie'];
    response.json(blocks);
});

app.listen(process.env.PORT);