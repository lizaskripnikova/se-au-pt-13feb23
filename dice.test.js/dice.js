// Get references to the buttons and result elements
let rollButton6 = document.getElementById("rollButton6");
let resultElement6 = document.getElementById("result6");
let rollButton10 = document.getElementById("rollButton10");
let resultElement10 = document.getElementById("result10");

// Generate a random number between 1 and 6 
rollButton6.onclick = function() {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  
  // Display the result on the web page
  resultElement6.textContent = "You rolled a " + diceRoll + "!";
};

// Generate a random number between 1 and 10 
rollButton10.onclick = function() {
  let diceRoll = Math.floor(Math.random() * 10) + 1;
  
  // Display the result on the web page
  resultElement10.textContent = "You rolled a " + diceRoll + "!";
};
