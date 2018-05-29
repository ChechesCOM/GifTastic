$(document).ready(function () {

    $("button").on('click', function () {
        var QueryURL = "https://api.giphy.com/v1/gifs/search?api_key=mw1M74p3rCgI8Gba5Do2weVhEa6B62uH&q=animals&limit=25&offset=0&rating=G&lang=en";

        var animals = $(this).data('name');
        $.ajax({
            url: queryURL,
            method: 'GET'
        });

    })

    $.get(queryURL).done(function(response) {
        var results = response.data;
        console.log(response);
        for (var i = 0; i < results.length; i++) {
            
        }
        
    })

});