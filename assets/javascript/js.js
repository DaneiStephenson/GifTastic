var topics = ['Snorlax', 'Lapras', 'Charizard', 'Pikachu', 'Dragonite', 'Poliwhirl', 'Vulpix', 'Snorlax', 'Seadra', 'Ditto', 'Squirtle', 'Mewtwo', 'Mr.Mine'];

    

function renderButtons(){ 
   $('#buttons').empty();
        // Loops through the array of movies
        
    for (var i = 0; i < topics.length; i++){
            // Then dynamicaly generates buttons for each movie in the array

            // Note the jQUery syntax here... 
            var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
            a.addClass('movie'); // Added a class 
            a.addClass('newaction');
             a.addClass('btn');
            a.attr("data-person", topics[i]);
            // Added a data-attribute
            a.text(topics[i]);

             // Provided the initial button text
            $('#buttons').append(a); // Added the button to the HTML

}
     $('.btn').on('click', function() {

        $('#gifsAppearHere').empty();
        
        var p = $(this).data('person');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=15";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                //store data in this variable
                var results = response.data;

                //this will console log the api and the object
                    console.log("#button");

                for (var i = 0; i < results.length; i++) {

                    //creates a new div
                    var gifDiv = $('<div>');
                    gifDiv.addClass('item');


                    var rating = results[i].rating;
//adds a pragrpah tags and changes the content in the p to Ratings
                    var p = $('<p>').text("Rating: " + rating);

                    var personImage = $('<img>');
                    personImage.data('static', results[i].images.fixed_height_still.url);
                    personImage.data('dynamic', results[i].images.fixed_height.url);

                    //sets image src
                    personImage.attr('src', results[i].images.fixed_height_still.url);

                    //this reads the image is static gif

                

                    personImage.on('click', function(){

                        // this is isn reference to the function of personImage being created above
                         var static = $(this).data('static');
                         var dynamic = $(this).data('dynamic');
                        // finds image src
                        if ($(this).attr('src') == dynamic){


                            $(this).attr('src', static);    
                        }

                        else {
                            $(this).attr('src', dynamic);  

                        }

                    })






                    
                    //gifDiv.appendTo($('<br>'));
                    //eveything above this is not being shwon yet
//the rating and image is now being shown since we we just appended it to the p  just created and the person image on the page
                    gifDiv.append(p)
                    gifDiv.append(personImage)

                    $('#gifsAppearHere').prepend(gifDiv);

                }
            });
    });
        }
    
console.log("b")

        $('#addDance').on('click', function(){
            var movie = $('#dance-input').val().trim();
            topics.push(movie);

            renderButtons();
                return false;
    })
 renderButtons();




