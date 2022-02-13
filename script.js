// Assigned Variables
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numberCharacters = "0123456789";
var chosenCharacters = "";
var result = "";

// Function to generate password
function generatePassword() {
  // Replace text input with final password
  var result = "";
  // Prompt user for password length
  var length = prompt(
    "How many characters would you like your password to contain? Please pick a number between 8 and 128."
  );
  console.log("The length is " + length);

  // If length requirements are met, continue to prompt user for password criteria
  if (length >= 8 && length <= 128) {
    var lowerCase = confirm("Do you want to include lowercase characters?");
    console.log("Lower Case = " + lowerCase);

    var upperCase = confirm("Do you want to include uppercase characters?");
    console.log("Upper Case = " + upperCase);

    var special = confirm("Do you want to include special characters?");
    console.log("Special Characters = " + special);

    var numbers = confirm("Do you want to include numbers?");
    console.log("Numbers = " + numbers);

    // Alert if no character type is selected
    if (!lowerCase && !upperCase && !special && !numbers) {
      alert("Invalid input. Please select at least one character type");
      console.log("Invalid input. No character type selected.");
      return "Please try again";
    }

    // Get characters for password
    if (lowerCase) {
      chosenCharacters += lowerCaseCharacters;
    }
    if (upperCase) {
      chosenCharacters += upperCaseCharacters;
    }
    if (special) {
      chosenCharacters += specialCharacters;
    }
    if (numbers) {
      chosenCharacters += numberCharacters;
    }

    // Generate password with chosen characters
    for (var i = 0; i < length; i++) {
      result += chosenCharacters.charAt(
        Math.floor(Math.random() * chosenCharacters.length)
      );
    }

    // Display password to the page
    return result;

    // Alert if length requirement is not met
  } else {
    alert("Invalid input. Please enter a number between 8 and 128.");
    console.log("Invalid length.");
    return "Please try again";
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
