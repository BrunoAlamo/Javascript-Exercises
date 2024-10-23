<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roman Numeral Converter</title>
    <style>
        h1 {
          text-align: center;
        }
        .convert-container {
          align-items: center;
          display: flex;
          justify-content: center;
        }
    </style>
</head>
<body>
    <header>
        <h1>Roman Numeral Converter</h1>
    </header>

    <main>
      <div class = "convert-container">
        <input id="number"></input>
        <button id="convert-btn">Convert</button>
        <p id="output"></p>
      </div>
    </main>

    <script>
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

    </script>
</body>
</html>
