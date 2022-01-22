window.onload = function() {
  var game_started = false;
  var score = 0;
  
  var boundary = document.getElementsByClassName("boundary");
  document.getElementById("start").addEventListener("click", function() {
    game_started = true;
    console.log("started");
  });

  for(var i = 0; i < boundary.length; i++) {
      boundary[i].addEventListener("mouseover", function(event) {
        if(game_started) {
          event.target.classList.add("youlose");
          document.getElementById("status").textContent = "You lose!";
          game_started = false;
          score = score - 10;
        }
      });
  }
  for(var i = 0; i < boundary.length; i++) {
      boundary[i].addEventListener("mouseleave", function(event) {
        event.target.classList.remove("youlose");
        document.getElementById("status").textContent = 'Begin by clicking the "S".';
      });
};
  document.getElementById("end").addEventListener("mouseover", function(){
    if(game_started) {
      document.getElementById("status").textContent = "You win!";
      game_started = false;
      score = score + 5;
    }
  })








}
