// variables for the various universal password selections. passwordLength & passwordSelection  are changed later so they won't be constants.
let passwordLength = 0;
const lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercaseCharacters = lowerCharacters.map(letter => letter.toUpperCase())
const numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
const specialCharacters = ["!","?","<",">",".","-","*","/","|","@","#","$","&","^","%","[","]"];
let passwordSelection =[];



// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let userCriteria = getCriteria();  // returns true or false depnding on result of the getCriteria function

  let passwordText = document.querySelector("#password")

  // This block will create the password only if the user has filled out the criteria correctly and returned a true value from the userCriteria function.
  // takes newpassword from the generatepassword function and shows it to the user if true, if userCriteria came back false, keeps the password blank.
  if(userCriteria){
  let password = generatePassword();
  passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}



// Will generate passwords once user has answered criteria for their needs. Runs a for loop length selected by the user. 
// Stores the randomly selected index from the password selection array selected by the user.
function generatePassword() {

  let newpassword = "";
  for (let i = 0; i < passwordLength; i++) {

    let newindex = Math.floor(Math.random() * passwordSelection.length);
    newpassword = newpassword + passwordSelection[newindex];

  }
  return newpassword
}


// This function will get the users criteria for their password. passwordLength is given the parseint() before the prompt as to make sure if user given answer comes back an integer.
// Password Selection is zeroed out so that previous password selections in criteria don't bleed into new selections.
// if loop with isNAN will clear any answers that arn't a number and return false so generate password doesn't run and it cuts the function short.
// if(confirm) statements run to check what specific criteria user wants for their password selection.
// If all if()s have been cleared, the getCriteriafunction returns true which then lets the write passwrod function to run.
function getCriteria() {
  
  passwordSelection = [];

  passwordLength = parseInt(prompt("How many characters would you like the password to be? It must be between 8-128 characters long."));
  
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {

    alert("Length must be a number that is in the range of 8-128 characters. Please try again.");
    return false;

  }

  if(confirm("Should your password contain lowercase letters?")) {
    passwordSelection = passwordSelection.concat(lowerCharacters);
  }

  if(confirm("Should your password contain uppercasecase letters?")) {
    passwordSelection = passwordSelection.concat(uppercaseCharacters);
  }

  if(confirm("Should your password contain numbers?")) {
    passwordSelection = passwordSelection.concat(numericCharacters);
  }

  if(confirm("Should your password contain special characters?")) {
    passwordSelection = passwordSelection.concat(specialCharacters);
  }

  return true;
}