// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var passwordlength = prompt("choose a length between 8 and 128 to create pasword");
if(passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
  alert("Please enter a valid number between 8 and 128")
  return;
};
var includecapitalLetters = confirm("Do you want to include Capital Letters?");
var includelowercaseLetters = confirm("Do you want to include lower-case Letters?");
var selectNumbers = confirm("Do you want to include numbers?");
var includeSpecialCharachters = confirm("Do you want to include special charecters?");
return (
  {
    includecapitalLetters,
    includeSpecialCharachters,
    selectNumbers,
    includelowercaseLetters,
    passwordlength
  }
)
}

// Function for getting a random element from an array
function getRandom(arr) {
var randomCharchter = arr[Math.floor(Math.random()*arr.length-1)]
return randomCharchter;
}

// Function to generate password with user input
function generatePassword() {
var paswordOptions = getPasswordOptions();
var possibleCharchters = [];
if(paswordOptions.includeSpecialCharachters){
  possibleCharchters = possibleCharchters.concat(specialCharacters);
};
if(paswordOptions.includecapitalLetters){
  possibleCharchters = possibleCharchters.concat(upperCasedCharacters);
};
if(paswordOptions.includelowercaseLetters){
  possibleCharchters = possibleCharchters.concat(lowerCasedCharacters);
};
if(paswordOptions.selectNumbers){
  possibleCharchters = possibleCharchters.concat(numericCharacters);
};
var finalPassword = ""
for ( i = 0; i <= paswordOptions.passwordlength; i++){
finalPassword += getRandom(possibleCharchters);
};
return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);