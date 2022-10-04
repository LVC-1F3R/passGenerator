// Assignment code here
function passLength() {
  let x = prompt("Pass length? (Must be between 8 to 128 characters.")
  if (x >= 8 && x <= 128) {
    lowerCase()
  } else {
    generatePassword()
  }
  return x
} 

function lowerCase() {
  let x = prompt("Do you want to include lower case letters?")
  return x
}

function upperCase() {
  let x = prompt("Do you want to include upper case letters?")
  return x
}

function numeric() {
  let x = prompt("Do you want to include numeric values?")
  return x
}

function specialChar() {
  let x = prompt("Do you want to include special characters?")
  return x
}

function validate() {
  if (lowerCase() && upperCase() && numeric() && specialChar() == false) {
    return true
  } 
  return false
} 

function generatePassword() {
  let length = passLength()
  let lCase = lowerCase()
  let uCase = upperCase()
  let num = numeric()
  let spec = specialChar()
  let val = validate()

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var x = 2
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
