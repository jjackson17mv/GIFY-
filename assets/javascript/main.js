var topics = ['Tyrion', 'Jamie', 'Jon', 'Daenerys', 'Bronn'];
var results;
var giphyURL= "https://api.giphy.com/v1/gifs/search?api_key=FUcIop5EQgVXBjGJ6DfE0VZD6K21JNhh&q=game-of-thrones&limit=25&offset=0&rating=PG-13&lang=en";



function makeButtons() {
    $("#got-buttons").empty();

    for(i = 0; i <topics.length; i++) {
        var b = $("<button>");

        b.addClass("got-btn");
        b.attr("data-name", topics[i]);
        b.text(topics[i]);

        $("#got-buttons").append(b);

    };
};

$("#add-chars").on("click", function(event) {
    event.preventDefault();

    var character = $("#got-input").val().trim();

    topics.push(character);
    $("#got-input").val("");

    makeButtons();

    console.log(topics);

});

makeButtons();

function displayGifs() {
    var charName = $(this).attr("data-name");
    var charStr = charName.split("").join("+");
    var gameOfThrones = charStr;
    var giphyURL = "https://api.giphy.com/v1/gifs/search?" + gameOfThrones + "api_key=FUcIop5EQgVXBjGJ6DfE0VZD6K21JNhh";
    

    
    $(giphyURL).val();
    $(charStr).val();
}

$.ajax({
    url: giphyURL,
    method: "GET"
}).then(function(response) {
    $("#char-view").text(JSON.stringify(response));
    
    console.log(giphyURL);
    console.log(response);

    var results = response.data;
    

    $("#gifs").empty();
    for(var i = 0; i < results.length; i++) {

        var charDiv = $("<div>");
                var para = $("<p class='rating'>").text("Rating: " + results[i].rating);
                var charImage = $("<img>");
    
                para.addClass("rating-text")
                
              charImage.addClass("image-gifs")
                charImage.attr("src", results[i].images.fixed_height_still.url)
                charImage.attr("data-state", "still");
              charImage.attr("data-position", i);
    
                charDiv.append(para);
              charDiv.append(charImage);
              charDiv.addClass("individual-gifs")
    
              $("#gifs").prepend(charDiv);

         };

         });

         $(document).on("click", ".got-btn", displayGifs);

         function gifAnimation() {
            var state = $(this).attr("data-state");
            var position = $(this).attr("data-position");
            position = parseInt(position);
      
            console.log(results[position].images.fixed_height.url);
          console.log(position);
            
      
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              }
          };
      
        $(document).on("click", ".got-btn", gifAnimation);


        

    




    
