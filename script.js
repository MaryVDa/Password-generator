// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "/", "<", ">"];

var selectedChars;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// 1. Prompt the user for the password criteria
//  a. password length 8 < 128
    var passLength = window.prompt("How many characters would you like to include in your password?");
    
    if(passLength < 8) {
      window.alert("Password length cannot be less than 8!");
      return;
    }

    if(passLength > 128) {
      window.alert("Password length cannot be greater than 128!");
      return;
    }

//  b. lowercase, uppercase, numbers, special characters
    var includeLowercase = window.confirm("Do you want to include lowercase letters?")
    var includeUppercase = window.confirm("Do you want to include uppercase letters?")
    var includeNumbers = window.confirm("Do you want to include numbers?")
    var includeSpecial = window.confirm("Do you want to include special characters?")

// 2. Validate the input
    if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial ) {
      window.alert("You should pick atleast one criteria!");
      return;
    }


// 3. Generate the password based on criteria
    selectedChars = [];

    if(includeLowercase) {
      selectedChars = selectedChars.concat(lowercase);
    }

    if(includeUppercase) {
      selectedChars = selectedChars.concat(uppercase);
    }

    if(includeNumbers) {
      selectedChars = selectedChars.concat(numbers);
    }

    if(includeSpecial) {
      selectedChars = selectedChars.concat(specialChar);
    }

    
    var myPassword = "";
    
    for(i = 0; i < passLength; i++){
      var randomChar = selectedChars[Math.floor(Math.random() * selectedChars.length)];
      myPassword += randomChar;
    }


// 4. Display password to the page
  return myPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
