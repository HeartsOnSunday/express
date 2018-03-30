//make the api call to the cities
/*global $*/
/*
 $.ajax({
        method: "GET",
        url: "",
        data: {sources: x, apikey: y},
        success: function(data){
            if (data.status == "ok") {
                console.log(data);
                console.log("x");
                for (var i = 0; i < data.length; i++) {
                    //display the title
                    var spots = document.getElementById("");
                    spots.innerHTML = ""+data.i+"";
                    document.getElementById("").appendChild("");
                }
            }
        }
    }); */
        
//START IT HERRE
$(function(){
    
    $.get('/blocks', appendToList);
        
        function appendToList(blocks) {
            var list = [];
            for(var i in blocks){
                list.push($('<li>', { text: blocks[i] }));
            }
            $('.block-list').append(list);
        }
});