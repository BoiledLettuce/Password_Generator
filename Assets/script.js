var characterLength = 8;
var choiceArray = [];
//all possible characters needed to be defined
var specialCharArray = '!@#$%^&*()[]{}|?/<>'.split(''); //.split('') seperates each character like an array 
var lowerCaseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperCaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numberArray = '1234567890'.split('');
console.log(specialCharArray, lowerCaseArray, upperCaseArray, numberArray); // checks to see if .split('') worked

function generatePassword() {
  console.log("Button has been clicked tho") //to check if button is working
  var password = ""; //makes sure password is cleared for generating

  for (var i = 0; i < characterLength; i++) {
    var randomPassword = Math.floor(Math.random() * choiceArray.length)
    password = password + choiceArray[randomPassword];
  }
  return password;
}

function getPrompts() {

  choiceArray = [];

  characterLength = parseInt(prompt('Character Length? (8-128)'));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("This is illegal");
    return false;

  }
  console.log("Password length = " + characterLength);

  if (confirm("Do you want lowercase letters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  console.log("lower case = " + lowerCaseArray);

  if (confirm("Do you want uppercase letters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  console.log("upper case = " + upperCaseArray);

  if (confirm("Do you want special characters?")) {
    choiceArray = choiceArray.concat(specialCharArray);
  }
  console.log("special = " + specialCharArray);

  if (confirm("Do you want numbers?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  console.log("numbers = " + numberArray);

  return true; //line 64 wants this
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var goodPrompts = getPrompts(); //if line 54 fires true, line 64 runs 

  if (goodPrompts) { //once all prompts are completed this will run because of line 54
    var password = generatePassword(); //based on the prompts, it will now generate a password
    var passwordText = document.querySelector("#password"); //finds password id

    passwordText.value = password; //places new value to password id

    console.log('password written = ' + password);

  } else {
    alert("TRY AGAIN"); //if prompts were not completed and line 29 fires false
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);

// 1. Prompt the user for the password criteria
  //  a. password length 8 < 128
  //  b. lowercase, uppercase, numbers, special characters
  // 2. Validate the input
  // 3. Genreate password baSed on cirterio
  // 4. Display password to the page.