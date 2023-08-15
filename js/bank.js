// Step 1 --> add click event handler to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // Step 2 --> Get the ammout of deposit from the depsoit filed
    const depositFiled = document.getElementById('deposit-field');
    const currentInputDepositString = depositFiled.value;
    // step 3 --> Get previous total deposit ammount
    const previousDepositElement = document.getElementById('pre-total-deposit');
    const previousTotalDepositString = previousDepositElement.innerText;
    // Step 4 --> Convert the value to number for arithmetic operation
    const currentInputDeposit = parseFloat(currentInputDepositString);
    const previousTotalDeposit = parseFloat(previousTotalDepositString);
    // Step 5 --> Update the total deposit value
    const currentTotalDeposit = currentInputDeposit + previousTotalDeposit;
    previousDepositElement.innerText = currentTotalDeposit;

    // step-6 --> Update the total balance

    const previousTotalElement = document.getElementById('pre-total');
    const previousTotalString = previousTotalElement.innerText;
    const previousTotalAmmout = parseFloat(previousTotalString);
    const currentTotalAmmount = previousTotalAmmout + currentInputDeposit;
    previousTotalElement.innerText = currentTotalAmmount;


    // step-7 --> Clear the deposit input filed
    depositFiled.value = '';
})