window.onload = function () {


    $("button").on("click", function () {
        var animalName = $(this).data("name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=mw1M74p3rCgI8Gba5Do2weVhEa6B62uH&q=" + animalName + "&limit=10";
                         

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            var results = response.data;
            
            var resultsDiv = $("<div>");

            for (var i = 0; i < results.length; i++) {

                var gifRating = $("<p>");
                var animalGif = $("<img>");

                gifRating.text(results[i].rating);

                animalGif.addClass("animalGif");

                animalGif.attr("src", results[i].images.original_still.url);

                animalGif.data("still", results[i].images.original_still.url);

                animalGif.data("animate", results[i].images.looping.mp4);

                animalGif.data("state", 'still');

                resultsDiv.append(gifRating);
                resultsDiv.append(animalGif);

                $('#gifs').append(resultsDiv);
                
            }

            $('.animalGif').on('click', function() {
            
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