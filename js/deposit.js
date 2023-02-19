// step-1: add event listener to the diposit dutton
console.log('Button clicked');

document.getElementById('btn-deposit').addEventListener('click', function(){
  // step-2: get the deposit amount from the deposit input field
  // for input field use .value to the value inside the input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);


 // step-3: get the current deposit total 
 // for non-input(element other than input, textarea) use innerText to get the text
 const depositTotalElement = document.getElementById('deposit-total');
 const prevDepositTotalString = depositTotalElement.innerText;
 const prevDepositTotal = parseFloat(prevDepositTotalString);

//  step-4: add numbers to set the total deposit
const currentDepositTotal = prevDepositTotal + newDepositAmount;
// set the deposit total
depositTotalElement.innerText = currentDepositTotal;

// step-5: get ballance current total
const balanceTotalElement = document.getElementById('balance-total');
const prevBalanceTotalString = balanceTotalElement.innerText;
const prevBalanceTotal = parseFloat(prevBalanceTotalString);

// step-6: calculate current total balance
const currentBalanceTotal = prevBalanceTotal + newDepositAmount;
// set the balance total
balanceTotalElement.innerText = currentBalanceTotal;

//  step-7: clear the deposit field
depositField.value = '';
  
});