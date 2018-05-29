window.onload = function () {


    $("button").on("click", function () {
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=mw1M74p3rCgI8Gba5Do2weVhEa6B62uH&q=animals&limit=25&offset=0&rating=G&lang=en"

        var animals = $(this).data("name");
        $.ajax({
            url: queryURL,
            method: 'GET'
        });

        //get API

        $.get(queryURL).done(function (response) {
            var results = response.data;
            console.log(response);
            for (var i = 0; i < results.length; i++) {
                var animal = $("<div/>");

                var p = $("<p/>");

                var animalGif = $("<img/>");

                p.text(results[i].rating);

                animalGif.addClass("");

                animalGif.attr("src", results[i].images);

                animalGif.attr("data-still", results[i].images);

                animalGif.attr("data-animate", results[i].images);

                animal.append(p);

                animal.append(animalGif);

                animal.prependTo($('#gifs'));
                
            }

            $('.anImg').on('click', function() {
            
                var state = $(this).attr('data-state'); 
                console.log(this);

                if (state == 'still') {
                
                $(this).attr('src', $(this).data('animate'));
                
                $(this).attr('data-state', 'animate');

                } else {
                        
                $(this).attr('src', $(this).data('still'));
                
                $(this).attr('data-state', 'still');
                }      
        });

    });
    


})};