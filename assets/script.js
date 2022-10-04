


// prompt for desired password length. will return to generatePassword function if a number between 8 to 128 is not selected
function passLength() {
  let x = prompt("Pass length? (Must choose a length between 8 to 128 characters. Input must be a number)")
  if (x >= 8 && x <= 128) {
    return x
  } else {
    alert("Please input a number between 8 to 128")
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


// Shuffle array (Fisher-Yates Shuffle. Commented to describe functionality)
function shuffle(array) {
  // defines currentIndex as the length of the passed through array
  let currentIndex = array.length,  randomIndex;
  // while the current index is not 0
  while (currentIndex != 0) {
    // defines randomIndex to be a random number rounded down multiplied by the current index
    randomIndex = Math.floor(Math.random() * currentIndex);
    //decrements index 
    currentIndex--;
    // shuffles index
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}



//random password functionality (console debug included)
function generatePassword() {
  // defines desired password length as variable 
  let length = passLength()
  //validation that length is number
  if (length === NaN) {
    //reloads page
    location.reload();
  } else if (length >= 8 && length <= 128) {
  //function calls
   lowerCase()
   upperCase()
   numeric()
   specialChar()
  console.log(length)
  // uses shuffle function on charArray from line 13
  shuffle(charArray)
  // converts array into string
  let charString = charArray.toString()
  console.log(charString)
  // removes residual comments from previous array
  let formattedCharString = charString.replaceAll(',', '')
  console.log(formattedCharString)
  // shrinks charString down to desired password length
  let generatedPass = formattedCharString.substring(0, length)
  console.log(generatedPass)
  // resets array
  // return generated password from function
  return generatedPass }
  else {
    location.reload();
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // if (>= 8 && x <= 128 )
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// reset array (may not be needed)
function resetArray(array) {
     array = []
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
