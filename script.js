// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // Assignment Code
var generateBtn = document.querySelector("#generate");

 //this function should generate a password whenever the "generate password" button is clicked//
 function generatePassword() {

  //variable options for each set of characters that can be pulled into the password based on selected prompt options//

  var stringSpecial = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~";

  var stringUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var stringLowerCase = "abcdefghijklmnopqrstuvwxyz";

  var stringNumbers = "0123456789";

  //This is an Empty variable for characters to pull into based on user selections//
  var newPassword = "";

  //This is an Empty variable to collect string arrays based on userCharacter choices//
  var newString = "";

  

  var userCharLength = prompt("How many characters do you want your password to be? (between 6- 128)");

  //if there is no character entered, or length is less than 6 or more than 128, prompt user regarding parameters//

  if (userCharLength === "" || userCharLength < 6 || userCharLength > 128) {
    alert ("Character length must be between 6 and 128");
  }

  //with above condition met, continue to ask user on type of characters to be included in password//
  else {

  var userChoiceNumbers = confirm("Add numeric characters?  (i.e. 123)");

  var userChoiceUpperCase = confirm("Add uppercase characters?  (i.e. ABC)");

  var userChoiceLowerCase = confirm("Add lowercase characters?  (i.e. abc)");
  
  var userChoiceSpecial = confirm("Add special characters?  (i.e. ?!K@)");



    if (userChoiceSpecial) {
      newString += stringSpecial;
    }
    
    if (userChoiceNumbers) {
      newString += stringNumbers;
    }
      
    if (userChoiceUpperCase) {
      newString += stringUpperCase;
    }
        
    if (userChoiceLowerCase) {
      newString += stringLowerCase;
    }

    if (newString === "") {
      alert("NOTE: You must choose a character type to display a password.");
      
    }
  
  }

  //use a for loop to fill newPassword from newString until length of characters requested by user are met//
  for (var i = 0; i < userCharLength; i++) {
    
  newPassword = newPassword + newString.charAt(Math.floor(Math.random() * Math.floor(newString.length))); 
  }
  return newPassword 
  //add newPassword to Generate Password box in displaypw text input//
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
