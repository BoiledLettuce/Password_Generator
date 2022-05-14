var characterLength = 8;
var choiceArray = [];

var specialCharArray = '!@#$%^&*()[]{}|?/<>' .split('');
var lowerCaseArray = 'abcdefghijklmnopqrstuvwxyz' .split('');
var upperCaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .split('');
var numberArray = '1234567890' .split('');
console.log(specialCharArray,lowerCaseArray,upperCaseArray,numberArray);

function generatePassword() {
  console.log("Button has been clicked tho")
    var password = "";

    for(var i = 0; i < characterLength; i++) {
      var randomPassword = Math.floor(Math.random() * choiceArray.length)
      password = password + choiceArray[randomPassword];
    }
  return password;
}
  
function getPrompts() {
  
  choiceArray = [];

  characterLength = parseInt(prompt('Character Length? (8-128)'));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
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

  return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var goodPrompts =  getPrompts(); //I put this here

    if(goodPrompts) {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    } else {
      alert("TRY AGAIN");
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);





//old code
// var password = confirm("Okay you want upper case?")
//   console.log("upper case = " + password);

//   var password = confirm("Okay you want numbers?")
//   console.log("numbers = " + password);
  
//   var password = confirm("Okay you want special characters?")
//   console.log("special characters = " + password);






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