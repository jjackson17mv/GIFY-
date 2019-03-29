
var topics = ['Tyrion', 'Jamie', 'Jon', 'Daenerys', 'Bronn'];

function displayGif(gifName) {

    var topics = $(this).attr("data-name");
    var queryUrl = "https:api.giphy.com/v1/gifs/search?FUcIop5EQgVXBjGJ6DfE0VZD6K21JNhh";

    $.ajax({
        url: queryUrl,
        method: "GET"
})      

    .done(function(response) {

    console.log(queryUrl);
    console.log(response);

    var topicsDiv = $("<div class='topics'>");
    var results = respone.data;

    $('gif-view').empty();
    for (var i=0; i < topics.length; i++) {
        
    }




}
}