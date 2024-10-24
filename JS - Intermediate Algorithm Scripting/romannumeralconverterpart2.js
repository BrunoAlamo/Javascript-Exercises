const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const numberOutput = document.getElementById("output");

function convertToRoman() {
const inputValue = numberInput.value
const numericTranslation = {
   1000: "M",
   900: "CM",
   500: "D",
   400: "CD",
   100: "C",
   90: "XC",
   50: "L",
   40: "XL",
   10: "X",
   9: "IX",
   5: "V",
   4: "IV",
   1: "I"
}
if(numericTranslation.hasOwnProperty(inputValue)){
const romanNumeral = numericTranslation[inputValue];
numberOutput.innerText = romanNumeral;
return;
} else {
const digitsArray = inputValue.split('').map(Number);
const num = parseInt(inputValue);
if(digitsArray.length === 1){
 if(num > 1 && num < 4){
   numberOutput.innerText = numericTranslation[1].repeat(num);
 } else if(num > 5 && num < 9) {
   numberOutput.innerText = `${numericTranslation[5]}${numericTranslation[1].repeat(num - 5)}`;
 }
} else if (digitsArray.length === 2) {
const firstDigit = digitsArray[0];
const secondDigit = digitsArray[1];
  if(firstDigit >= 1 && firstDigit <= 3 && num > 10 && num < 40){
numberOutput.innerText = numericTranslation[10].repeat(firstDigit);
if (secondDigit > 0 && secondDigit < 4) {
    numberOutput.innerText += numericTranslation[1].repeat(secondDigit);
} else if (secondDigit > 5 && secondDigit < 9) {
    numberOutput.innerText += `${numericTranslation[5]}${numericTranslation[1].repeat(secondDigit - 5)}`;
}  else if (secondDigit in numericTranslation){
  numberOutput.innerText += numericTranslation[secondDigit];
}
  } else if(firstDigit === 4 && num > 40 && num < 50) {
    numberOutput.innerText = numericTranslation[40];
   if (secondDigit > 0 && secondDigit < 4) {
    numberOutput.innerText += numericTranslation[1].repeat(secondDigit);
} else if (secondDigit > 5 && secondDigit < 9) {
    numberOutput.innerText += `${numericTranslation[5]}${numericTranslation[1].repeat(secondDigit - 5)}`;
}  else if (secondDigit in numericTranslation){
  numberOutput.innerText += numericTranslation[secondDigit];
}
  } else if(firstDigit >= 5 && firstDigit <= 8 && num > 50 && num < 90){
    numberOutput.innerText = numericTranslation[50];
    if(firstDigit === 6){
      numberOutput.innerText += numericTranslation[10];
    } else if (firstDigit === 7) {
numberOutput.innerText += numericTranslation[10].repeat(firstDigit - 5);
    } else if (firstDigit === 8) {
      numberOutput.innerText += numericTranslation[10].repeat(firstDigit - 5);
    }
    if (secondDigit > 0 && secondDigit < 4) {
    numberOutput.innerText += numericTranslation[1].repeat(secondDigit);
} else if (secondDigit > 5 && secondDigit < 9) {
    numberOutput.innerText += `${numericTranslation[5]}${numericTranslation[1].repeat(secondDigit - 5)}`;
}  else if (secondDigit in numericTranslation){
  numberOutput.innerText += numericTranslation[secondDigit];
}
  } else if(firstDigit === 9 && num > 90 && num < 100) {
    numberOutput.innerText = numericTranslation[90];
   if (secondDigit > 0 && secondDigit < 4) {
    numberOutput.innerText += numericTranslation[1].repeat(secondDigit);
} else if (secondDigit > 5 && secondDigit < 9) {
    numberOutput.innerText += `${numericTranslation[5]}${numericTranslation[1].repeat(secondDigit - 5)}`;
}  else if (secondDigit in numericTranslation){
  numberOutput.innerText += numericTranslation[secondDigit];
}
  }
} else if(digitsArray.length === 3) {
const firstDigit = digitsArray[0];
const secondDigit = digitsArray[1];
const thirdDigit = digitsArray[2];

if(firstDigit >= 1 && firstDigit <= 3 && num > 100 && num < 400){
numberOutput.innerText = numericTranslation[100].repeat(firstDigit);

if (thirdDigit > 0 && thirdDigit < 4) {
    numberOutput.innerText += numericTranslation[1].repeat(thirdDigit);
} else if (thirdDigit > 5 && thirdDigit < 9) {
    numberOutput.innerText += `${numericTranslation[5]}${numericTranslation[1].repeat(thirdDigit - 5)}`;
}  else if (thirdDigit in numericTranslation){
  numberOutput.innerText += numericTranslation[thirdDigit];
} 
} 

}
}
}

convertBtn.addEventListener("click", () => {
const inputValue = numberInput.value
if(inputValue === ""){
  numberOutput.innerText = "Please enter a valid number";
  return;
} else if (inputValue === "-1") {
  numberOutput.innerText = "Please enter a number greater than or equal to 1";
  return;
} else if (inputValue >= "4000") {
numberOutput.innerText = "Please enter a number less than or equal to 3999";
return;
} else if (parseInt(inputValue) < 0) {
numberOutput.innerText = "Please enter a number greater than or equal to 1"
}
});

convertBtn.addEventListener("click", convertToRoman);
