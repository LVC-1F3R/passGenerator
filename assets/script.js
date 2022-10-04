// prompt for desired password length. will return to generatePassword function if a number between 8 to 128 is not selected
function passLength() {
  let x = prompt("Pass length? (Must be between 8 to 128 characters & Input must be a number")
  if (x >= 8 && x <= 128) {
    return x
  } else {
    generatePassword()
  }
  return x
} 

// creates character array for randomization 
let charArray = []


// asks user if they would like lower case letters included into password. will push lower case letters to charArray if chosen. returns value of x for validation. 
function lowerCase() {
  let x = confirm("Do you want to include lower case letters?")
  if (x) {
    charArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
  } else {
    alert("You will not have lower case letters included")
  }
  return x
}

// asks user if they would like upper case letters included into password. will push upper case letters to charArray if chosen. returns value of x for validation. 
function upperCase() {
  let x = confirm("Do you want to include upper case letters?")
  if (x) {
    charArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
  } else {
    alert("You will not have upper case letters included")
  }
  return x
}

// asks user if they would like numeric values included into password. will push numeric values to charArray if chosen. returns value of x for validation. 
function numeric() {
  let x = confirm("Do you want to include numeric values?")
  if (x) {
    charArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
  } else {
    alert("You will not have numbers included")
  }
  return x
}

// asks user if they would like special characters included into password. will push special characters to charArray if chosen. returns value of x for validation. 
function specialChar() {
  let x = confirm("Do you want to include special characters?")
  if (x) {
    charArray.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+")
  } else {
    alert("You will not special characters included")
  }
  return x
}


// Shuffle array (Fisher-Yates Shuffle)
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



//random password functionality
function generatePassword() {
  let length = passLength()
  let lCase = lowerCase()
  let uCase = upperCase()
  let num = numeric()
  let spec = specialChar()
  console.log(length)
  shuffle(charArray)
  let charString = charArray.toString()
  console.log(charString)
  let formattedCharString = charString.replaceAll(',', '')
  console.log(formattedCharString)
  let generatedPass = formattedCharString.substring(0, length)
  console.log(generatedPass)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
