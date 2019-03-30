var topics = ['Tyrion', 'Jamie', 'Jon', 'Daenerys', 'Bronn'];
var results;
var giphyURL =   "https://api.giphy.com/v1/gifs/trending?api_key=FUcIop5EQgVXBjGJ6DfE0VZD6K21JNhh";

function makeButtons() {
    $("#got-buttons").empty();

    for(i = 0; i <topics.length; i++) {
        var b = $("<button>");

        b.addClass("got-btn");
        b.attr("data-name", topics[i]);
        b.text:(topics[i]);

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



