function submitChoice() {
  // Get input values and assign them to variables
  let userName = document.getElementById("username").value;
  let userChoice = document.getElementById("player-choice").value;

  // Concatenate message using assignment only
  let message = "Hello, " + userName + "! You chose: " + userChoice + ".";

  // Output method 1: on the page
  document.getElementById("output").textContent = message;

  // Output method 2: alert box
  alert(message);
}
