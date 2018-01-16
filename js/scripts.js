$(document).ready(function() {
  $("#favorite").submit(function(event) {
    var favorites = [$("#food").val(), $("#animal").val(), $("#vacation").val(), $("#color").val()];

    var otherFavorites = [];
    otherFavorites.push(favorites[1], favorites[0], favorites[2]);
    console.log(otherFavorites);

    $("#user-favorites").html("<p>This is an array of all your favorite things</p>" + favorites.join(", ") + "<p>Here are the second, first, and third elements in your array</p><ul><li>" + otherFavorites[0] + "</li><li>" + otherFavorites[1] + "</li><li>" + otherFavorites[2] + "</li></ul>");

    //console.log(favorites);
    event.preventDefault();
  });
});
