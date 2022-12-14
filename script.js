const squares = document.getElementsByClassName("square");
var turn = true;
var over = false;
var counter = 0;

//clicking squares marks them with the corresponding player mark
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    if (over) {
      return;
    }
    if (squares[i].textContent == "X" || squares[i].textContent == "O") {
      return;
    }
    if (turn) {
      squares[i].innerHTML = "X";
      counter++;
      checkWin();
      turn = !turn;
    } else {
      squares[i].innerHTML = "O";
      counter++;
      checkWin();
      turn = !turn;
    }
  });
}

//restart button
document.getElementById("restart").addEventListener("click", function () {
  location.reload();
});

//checks all win conditions
function checkWin() {
  var winner = "";

  if (counter == 9) {
    over = true;
    winner = "Draw!";
  }
  //checks if their is three of the same marks in a row
  if (
    squares[0].textContent == squares[1].textContent &&
    squares[0].textContent == squares[2].textContent &&
    squares[0].textContent != ""
  ) {
    squares[0].style.background = "#66ff99";
    squares[1].style.background = "#66ff99";
    squares[2].style.background = "#66ff99";
    winner = squares[0].textContent + " Wins!";
    over = true;
  } else if (
    squares[3].textContent == squares[4].textContent &&
    squares[3].textContent == squares[5].textContent &&
    squares[3].textContent != ""
  ) {
    squares[3].style.background = "#66ff99";
    squares[4].style.background = "#66ff99";
    squares[5].style.background = "#66ff99";
    winner = squares[3].textContent + " Wins!";
    over = true;
  } else if (
    squares[6].textContent == squares[7].textContent &&
    squares[6].textContent == squares[8].textContent &&
    squares[6].textContent != ""
  ) {
    squares[6].style.background = "#66ff99";
    squares[7].style.background = "#66ff99";
    squares[8].style.background = "#66ff99";
    winner = squares[6].textContent + " Wins!";
    over = true;
  } else if (
    squares[0].textContent == squares[3].textContent &&
    squares[0].textContent == squares[6].textContent &&
    squares[0].textContent != ""
  ) {
    squares[0].style.background = "#66ff99";
    squares[3].style.background = "#66ff99";
    squares[6].style.background = "#66ff99";
    winner = squares[0].textContent + " Wins!";
    over = true;
  } else if (
    squares[1].textContent == squares[4].textContent &&
    squares[1].textContent == squares[7].textContent &&
    squares[1].textContent != ""
  ) {
    squares[1].style.background = "#66ff99";
    squares[4].style.background = "#66ff99";
    squares[7].style.background = "#66ff99";
    winner = squares[1].textContent + " Wins!";
    over = true;
  } else if (
    squares[2].textContent == squares[5].textContent &&
    squares[2].textContent == squares[8].textContent &&
    squares[2].textContent != ""
  ) {
    squares[5].style.background = "#66ff99";
    squares[8].style.background = "#66ff99";
    squares[2].style.background = "#66ff99";
    winner = squares[5].textContent + " Wins!";
    over = true;
  } else if (
    squares[0].textContent == squares[4].textContent &&
    squares[0].textContent == squares[8].textContent &&
    squares[0].textContent != ""
  ) {
    squares[0].style.background = "#66ff99";
    squares[4].style.background = "#66ff99";
    squares[8].style.background = "#66ff99";
    winner = squares[0].textContent + " Wins!";
    over = true;
  } else if (
    squares[2].textContent == squares[4].textContent &&
    squares[2].textContent == squares[6].textContent &&
    squares[2].textContent != ""
  ) {
    squares[2].style.background = "#66ff99";
    squares[4].style.background = "#66ff99";
    squares[6].style.background = "#66ff99";
    winner = squares[2].textContent + " Wins!";
    over = true;
  }
  display(winner);
}

function display(message) {
  //displays the win/draw screen for the corresponding mark
  if (over) {
    document.getElementById("winning-message").style.display = "flex";
    document.getElementById("message").textContent = message;
  }
}
