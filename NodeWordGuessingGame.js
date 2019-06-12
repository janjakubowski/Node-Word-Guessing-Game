var inquirer = require("inquirer");

  main();

// function which prompts the user for what action they should take
function main() {
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
      switch (action) {
          case "Artists appear more than once" :
            console.log("more than once");
            newGame();
            break;
          case "Quit" :
            console.log("Adios")
            break;
      }
    });
}