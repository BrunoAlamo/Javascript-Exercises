const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


function validNumbers() {
  const inputValue = userInput.value;
  let inputArray = inputValue.split('');
  console.log(inputArray);
  console.log(inputArray.length);

  const digits = inputValue.match(/\d/g);
  const digitCount = digits ? digits.length : 0;

 if(digitCount === 11){
  if(inputArray.length === 14){
   if(inputArray[0] === "1"){
     if(inputArray[1] === " " ||inputArray[1] === "("){
      if(inputArray[5] === " " || inputArray[5] === ")" || inputArray[5] === "-"){
        if(inputArray[9] === " " || inputArray[9] === "-"){
          if(inputArray[1] === " " && inputArray[5] === ")" || inputArray[1] === "(" && inputArray[5] === " "){
            resultsDiv.textContent = `Invalid US number: ${inputValue}`;
            return;
          }
          resultsDiv.textContent = `Valid US number: ${inputValue}`;
          return;
        }
      }
     }
   }
  } else if(inputArray.length === 16){
    if(inputArray[0] === "1"){
      if(inputArray[1] === " "){
        if(inputArray[2] === "("){
          if(inputArray[6] === ")"){
            if(inputArray[7] === " "){
              if(inputArray[11] === "-"){
                resultsDiv.textContent = `Valid US number: ${inputValue}`;
                return;
              }
            }
          }
        }
      }
    }
  }
 } else {
   resultsDiv.textContent = `Invalid US number: ${inputValue}`;
 }

 if(digitCount === 10){
   if(inputArray.length === 10){
     resultsDiv.textContent = `Valid US number: ${inputValue}`;
     return;
   } else if(inputArray.length === 12){
      if(inputArray[3] === "-"){
        if(inputArray[7] === "-"){
          resultsDiv.textContent = `Valid US number: ${inputValue}`;
          return;
        }
      }
   } else if(inputArray.length === 13){
      if(inputArray[0] === "("){
        if(inputArray[4] === ")"){
          if(inputArray[8] === "-"){
            resultsDiv.textContent = `Valid US number: ${inputValue}`;
            return;
          }
        }
      }
   }
 } else {
   resultsDiv.textContent = `Invalid US number: ${inputValue}`;
   return;
 }

}

function noInput() {
    const inputValue = userInput.value;
    if (inputValue === "") {
        alert("Please provide a phone number");
    }
}

checkBtn.addEventListener("click", noInput);

clearBtn.addEventListener("click", function() {
  resultsDiv.innerHTML = "";
});

checkBtn.addEventListener("click", validNumbers);