var characterLength = 8;
var choiceArr = [];

var specialCharArray = '!@#$%^&*()[]{}|?/<>' .split('');
var lowerCaseArray = 'abcdefghijklmnopqrstuvwxyz' .split('');
var upperCaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .split('');
var numberArray = '1234567890' .split('');
console.log(specialCharArray,lowerCaseArray,upperCaseArray,numberArray);

function generatePassword() {
  console.log("Button has been touched tho")

  var password = prompt("You wanna make a password tho? how long then?")
  console.log("Password length = " + password);
  
    if (isNaN(password)) {
      alert ('Not a number');
      
    } else {
      var password = confirm("Okay you want lower case?")
      console.log("lower case = " + password);
    }
  
    var password = confirm("Okay you want upper case?")
  console.log("upper case = " + password);

  var password = confirm("Okay you want numbers?")
  console.log("numbers = " + password);
  
  var password = confirm("Okay you want special characters?")
  console.log("special characters = " + password);
  
  return "Generated password be here tho"
}
  
function getPrompts() {
  characterLength = parseInt(prompt('Character Length? (8-128)'));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("NOT A NUMBER")
  }
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












// Assignment code here
// 1. Prompt the user for the password criteria
  //  a. password length 8 < 128
  //  b. lowercase, uppercase, numbers, special characters
  // 2. Validate the input
  // 3. Genreate password baSed on cirterio
  // 4. Display password to the page.










// //FOR FUN #########
//   if (password == 1) {
//     alert("LOL");
//     addEventListener("click", alertDumbUser);
//   } else {
//     alert("WOW");
//     addEventListener("click", alertDumbUser);
//   }
  

//   

// function alertDumbUser() {
//   alert("YOUR DUMB HAH YOU CLICKED")
// }
// //FOR FUN #########