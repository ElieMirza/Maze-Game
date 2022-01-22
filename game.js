window.onload = function() {

  var game_started = false;
  var score = 0;
  var reset_button = document.createElement("button");
  var score_div = document.getElementsByClassName("boundary example")[0];
  showScore();

  reset_button.addEventListener ("click", function() {
  score = 0;
  showScore();
  });

  document.getElementById("start").addEventListener("click", function() {
    document.getElementById("status").textContent = 'GO!';
    game_started = true;
  });

  var boundary = document.getElementsByClassName("boundary");

  for(var i = 0; i < boundary.length; i++) {
    boundary[i].addEventListener("mouseover", function(event) {
      if(game_started) {
        event.target.classList.add("youlose");
        document.getElementById("status").textContent = "You lose!";
        game_started = false;
        score = score - 10;
        showScore();

      }
    });
  }

  for(var i = 0; i < boundary.length; i++) {
      boundary[i].addEventListener("mouseleave", function(event) {
        event.target.classList.remove("youlose");
      });
  };
  document.getElementById("end").addEventListener("mouseover", function(){
    if(game_started) {
      document.getElementById("status").textContent = "You win!";
      game_started = false;
      score = score + 5;
      showScore();

    }
  })

  function showScore() {
  score_div.innerHTML = `Score: ${score}`;
  reset_button.innerHTML = "Reset Score";
  score_div.appendChild(reset_button);
  };

  

}
