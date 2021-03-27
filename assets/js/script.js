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
