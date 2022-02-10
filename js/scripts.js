//UI Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

//Business Logic
function creditCardValidator(str) {
  if (noInputtedWord (word, text)) {
    return 0;
  }
  let numbers = str.split("");
  let numbersArray = numbers;
  console.log(numbersArray);
  for (let i = numbersArray.length - 1; i >= 0; i -= 2) {
    numbersArray[i] *= 2;
    }
  console.log(numbersArray); 
};

// function doubleDigit(str) {
//   if (noInputtedWord (word, text)) {
//     return 0;
//   }
// }

creditCardValidator("4102080880435620")

// function creditCardValidator(str) {
//   let numbers = str.split("");
//   let numbersArray = numbers;
//   console.log(numbersArray);
//   for (let i = numbersArray.length - 1; i >= 0; i -= 2) {
//     numbersArray[i] *= 2;
//     }
//   console.log(numbersArray); 
// };

//Utility Logic

//Potential Code to use for Business Logic

// function checkNumber() {
//   let number = document.getElementById("creditCard").value;
//   let multiplier = "2121212121212121";  // One more character added...
//   let multipliedNumber;
//   let sum = 0 // Initialise it as a number.

//   if (number.length != 16) {
//       //console.log("Please enter a Credit Card number that is 16 digits in ///length.");
//   } else {
//       for (count = 0; count < number.length; count++) { // Include last digit in loop
//           multipliedNumber = number[count] * multiplier[count];
//           if (multipliedNumber > 9) {
//               // Use arithmetic to add the two digits
//               multipliedNumber = multipliedNumber % 10 + Math.floor(multipliedNumber/10);
//           }
//           sum += multipliedNumber;
//       }
//       let check = sum % 10; // Simpler now because all digits were processed
//       if (check == 0) { // Sum is multiple of 10
//           console.log(`${number} is a valid Credit Card number.`);
//       } else {
//           console.log(`${number} is not a valid Credit Card number.`);
//       }
//   }
// }