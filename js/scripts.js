//UI Logic

//Business Logic

function creditCardValidator(str) {
  let numbersArray = str.split("");
  for (let i = numbersArray.length - 1; i >= 0; i -= 2) {
    numbersArray[i] *= 2;
  }
  for (let i = numbersArray.length - 1; i >= 0; i -= 2) {
    if(numbersArray[i] > 9) {
      numbersArray[i].toString()[0];
      let firstDigit = numbersArray[i].toString()[0];
      let secondDigit = numbersArray[i].toString()[1];
      numbersArray[i] = parseInt(firstDigit) + parseInt(secondDigit); 
      console.log(numbersArray);
    } 
}
}

creditCardValidator("4102080880435620")


//Utility Logic
