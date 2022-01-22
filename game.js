window.onload = function() {
  var game_started = false;
  var score = 0;

  var score_text = document.getElementsByClassName("boundary example")[0];
  score_text.innerHTML = "Score: 0";

  var reset_button = document.createElement("button");
  reset_button.innerHTML = "Reset Score";

  var score_div = document.getElementsByClassName("example")[0];
  score_div.appendChild(reset_button);

  reset_button.addEventListener ("click", function() {
  score = 0;
  });

  var boundary = document.getElementsByClassName("boundary");
  document.getElementById("start").addEventListener("click", function() {
    document.getElementById("status").textContent = 'GO!';
    game_started = true;
    });



  for(var i = 0; i < boundary.length; i++) {
      boundary[i].addEventListener("mouseover", function(event) {
        if(game_started) {
          event.target.classList.add("youlose");
          document.getElementById("status").textContent = "You lose!";
          game_started = false;
          score = score - 10;
          score_text.innerHTML = `Score: ${score}`;

          var reset_button = document.createElement("button");
          reset_button.innerHTML = "Reset Score";

          var score_div = document.getElementsByClassName("example")[0];
          score_div.appendChild(reset_button);

          reset_button.addEventListener ("click", function() {
            document.getElementById("status").textContent = 'Begin by clicking the "S".';
          score_text.innerHTML = "Score: 0";
          score = 0;
          });
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
      score_text.innerHTML = `Score: ${score}`;

      var reset_button = document.createElement("button");
      reset_button.innerHTML = "Reset Score";

      var score_div = document.getElementsByClassName("example")[0];
      score_div.appendChild(reset_button);

      reset_button.addEventListener ("click", function() {
      document.getElementById("status").textContent = 'Begin by clicking the "S".';
      score_text.innerHTML = "Score: 0";
      score = 0;
      });
    }
  })








}
