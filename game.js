window.onload = function() {

  var game_started = false;
  var score = 0;
  var score_div = document.getElementsByClassName("boundary example")[0];
  var boundary = document.getElementsByClassName("boundary");
  showScore();


  document.getElementById("start").addEventListener("click", function() {
    score = 0;
    showScore();
    resetColor();
  });

  document.getElementById("start").addEventListener("mouseover", function() {
    document.getElementById("status").textContent = 'GO!';
    game_started = true;
    resetColor();
  });

  document.getElementById("game").addEventListener("mouseleave", function() {
    document.getElementById("status").textContent = 'NOT THIS WAY!!';
    game_started = false;
  });

  for (var i = 0; i < boundary.length; i++) {
    boundary[i].addEventListener("mouseover", function() {
      if (game_started) {
        for (var i = 0; i < boundary.length; i++) {
          boundary[i].classList.add("youlose");
        };
        statusChecker("lose");
      };
    });
  };

  document.getElementById("end").addEventListener("mouseover", function() {
    if (game_started) {
      for (var i = 0; i < boundary.length; i++) {
        boundary[i].classList.add("youwin");
      };
      statusChecker("win");
    };
  });

  function resetColor() {
    for (var i = 0; i < boundary.length; i++) {
      boundary[i].classList.remove("youlose");
      boundary[i].classList.remove("youwin");
    };
  };

  function showScore() {
    score_div.innerHTML = `Score: ${score}`;
  };

  function statusChecker(status) {
    document.getElementById("status").textContent = `You ${status}!`;
    game_started = false;
    if (status == "win") {
      score = score + 5;
    } else {
      score = score - 10;
    };
    showScore();
  };
};
