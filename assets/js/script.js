// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create a function to iterate through ASCII decimal values and store those in an array called "array".
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
      array.push(i)
  }
  return array
}

// Invoke the function arrayFromLowToHigh. Provide parameters to the function that give the ranges of ASCII decimal values to retreive for each variable
var ASCIILowerCaseChars = arrayFromLowToHigh(97,122);
var ASCIIUpperCaseChars = arrayFromLowToHigh(65,90);
var ASCIINumberChars = arrayFromLowToHigh(48,57);
var ASCIISymbolChars = arrayFromLowToHigh(33, 47)
   .concat(arrayFromLowToHigh(58, 64))
   .concat(arrayFromLowToHigh(91, 96))
   .concat(arrayFromLowToHigh(123, 126));

// Create empty array. The user input from prompts will be stored here before generating random password.
var ASCIIToUseInPassword = [];

function generatePassword() {

  // Get the criteria from the user.
  var passwordLength = prompt('Please define password length')

  // check if the password length is within the required 8 to 128 length otherwise cease.
  if(passwordLength < 8 || passwordLength > 128){
    alert('You have to enter a number between 8 and 128');
    return generatePassword();
}

  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include Uppercase characters?");
  var useNumbers = confirm("Include Numbers?");
  var useSymbols = confirm("Include Symbols?");

  // Build the ASCIIToUseInPassword values based on the user's responses to prompts (using concat)
  if (useLowercase) {
    ASCIIToUseInPassword = ASCIIToUseInPassword.concat(ASCIILowerCaseChars);  
  }

  if (useUppercase) {
    ASCIIToUseInPassword = ASCIIToUseInPassword.concat(ASCIIUpperCaseChars);  
  }

  if (useNumbers){
    ASCIIToUseInPassword = ASCIIToUseInPassword.concat(ASCIINumberChars);  
  }

  if (useSymbols) {
    ASCIIToUseInPassword = ASCIIToUseInPassword.concat(ASCIISymbolChars);  
  }

  var passwordCharacters = []
  for (let i=0; i < passwordLength; i++) {
      var character = ASCIIToUseInPassword[Math.floor(Math.random() * ASCIIToUseInPassword.length)];
      passwordCharacters.push(String.fromCharCode(character));
  }

  return passwordCharacters.join('')
}