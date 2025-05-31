let price = 19.5;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const currencyUnit = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

const inputCash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");

function getChange(change, cid){
  let changeArray = [];
  let reversedCid = cid.slice().reverse(); 

  for(let [currency, amount] of reversedCid) {
    let currencyValue = currencyUnit[currency];
    let amountToReturn = 0;

    while(change >= currencyValue && amount > 0){
      change -= currencyValue;
      change = Math.round(change * 100) / 100;
      amount -= currencyValue;
      amountToReturn += currencyValue;
    }

    if (amountToReturn > 0) {
      changeArray.push([currency, amountToReturn]);
    }
  }

  if(change > 0) {
    return "INSUFFICIENT_FUNDS";
  }

 return changeArray;
}

purchaseBtn.addEventListener("click", () => {
  const cashNumber = Number(inputCash.value);
  let drawerTotal = cid.reduce((sum, currency) => sum + currency[1], 0);
  let change = cashNumber - price;

  if (isNaN(cashNumber)) {
    alert("Please enter a valid number for the cash amount.");
    return;
  }

  if (price > cashNumber) {
    alert("Customer does not have enough money to purchase the item");
  } else if (price === cashNumber) {
    changeDue.innerHTML = "";
    const pElement = document.createElement("p");
    pElement.textContent = "No change due - customer paid with exact cash";
    changeDue.appendChild(pElement);
  } else if (price < cashNumber) {
    if (drawerTotal === change) {
      changeDue.innerHTML = "";
      const pElement = document.createElement("p");
      let sortedCid = cid.slice().reverse().filter(item => item[1] > 0);
      let changeText = sortedCid
        .map(item => `${item[0]}: $${item[1].toFixed(2)}`)
        .join(" ");
      pElement.textContent = `Status: CLOSED ${changeText}`;
      changeDue.appendChild(pElement);
    } else if (drawerTotal < change) {
      changeDue.innerHTML = "";
      const pElement = document.createElement("p");
      pElement.textContent = "Status: INSUFFICIENT_FUNDS";
      changeDue.appendChild(pElement);
    } else {
      changeDue.innerHTML = "";
      const pElement = document.createElement("p");
      let changeResult = getChange(change, cid);
      if (changeResult === "INSUFFICIENT_FUNDS") {
        pElement.textContent = "Status: INSUFFICIENT_FUNDS";
      } else {
        let changeText = changeResult
          .map(item => `${item[0]}: $${item[1].toFixed(2)}`)
          .join(" ");
        pElement.textContent = `Status: OPEN ${changeText}`;
      }
      changeDue.appendChild(pElement);
    }
  }
});
