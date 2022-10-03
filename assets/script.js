// Assignment code here
function passLength() {
  let x = prompt("Pass length? (Must be between 8 to 128 characters.")
  if (x > 8 && x < 128) {
    charTypes()
  } else {
    generatePassword()
  }
  return 
} 

function charTypes() {
  
}

function generatePassword() {
  let passL = passLength()
  let passT = charTypes()

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
