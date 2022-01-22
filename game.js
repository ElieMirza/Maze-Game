window.onload = function() {
  var game_started = false;
  var boundary = document.getElementsByClassName("boundary");
  document.getElementById("start").addEventListener("mouseover", function() {
    game_started = true;
    console.log("started");
  });

  for(var i = 0; i < boundary.length; i++) {
      boundary[i].addEventListener("mouseover", function(event) {
        if(game_started) {
          event.target.classList.add("youlose");
          document.getElementById("status").textContent = "You lose!";
          game_started = false;
        }
      });
  }
  for(var i = 0; i < boundary.length; i++) {
      boundary[i].addEventListener("mouseleave", function(event) {
        event.target.classList.remove("youlose");
        document.getElementById("status").textContent = 'Begin by moving your mouse over the "S".';
      });
};
}
