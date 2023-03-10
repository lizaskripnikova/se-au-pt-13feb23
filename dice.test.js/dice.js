// Get references to the buttons and result elements
const rollButton6 = document.getElementById("rollButton6");
const resultElement6 = document.getElementById("result6");
const rollButton10 = document.getElementById("rollButton10");
const resultElement10 = document.getElementById("result10");


function rollDice(maxRoll) {
  let diceRoll = Math.floor(Math.random() * maxRoll) + 1;
  
  // Display the result on the web page
  if (maxRoll === 6) {
    resultElement6.textContent = "You rolled a " + diceRoll + "!";
  } else {
    resultElement10.textContent = "You rolled a " + diceRoll + "!";
  }
}

// To call the rollDice function
rollButton6.onclick = function() {
  rollDice(6);
};

rollButton10.onclick = function() {
  rollDice(10);
};