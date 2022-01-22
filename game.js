window.onload = function() {
  var game_started = false;
  var entered_maze = false;
  var boundary = document.getElementsByClassName("boundary");
  document.getElementById("start").addEventListener("mouseover", function() {
    game_started = true;
    entered_maze = true;
    console.log("started");
  })
}
