var inquirer = require("inquirer");
var Letter = require("./Letter.js");

function newGame () {
  console.log("Play New Game");
  var a = new Letter("A", false);
  console.log("char: " + a.displayLetter());
  a.checkLetter("A");
  console.log("char: " + a.displayLetter());
  // start();
}

  start();

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: ["Play the game", 
                "Quit"]
    })
    .then(function(answer) {
      // based on their answer, either call newGame function 
      switch (answer.action) {
          case "Play the game" :
            console.log("more than once");
            newGame();
            break;
          case "Quit" :
            console.log("Adios")
            break;
      }
    });
}