/**
 * step 1 --> add event handler to the withdraw button
 * step 2 --> get the withdraw ammount from the withdraw filed
 * step 3 --> get previous total withdraw and convert them to number 
 */





document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const currentWithdrawAmmountString = withdrawFieldElement.value;
    const previousTotalWithdrawElement = document.getElementById('pre-withdraw');
    const previousTotalWithdrawString = previousTotalWithdrawElement.innerText;


    // Covert to number

    const currentWithdraw = parseFloat(currentWithdrawAmmountString);
    const previousWithdraw = parseFloat(previousTotalWithdrawString);

    // Set the current total withdraw to the withraw section
    const totalWithdraw = currentWithdraw + previousWithdraw;
    previousTotalWithdrawElement.innerText = totalWithdraw;

    const previousTotalElement = document.getElementById('pre-total');
    const previousTotalAmmoutString = previousTotalElement.innerText;
    const previousTotalAmmout = parseFloat(previousTotalAmmoutString);

    const crrentTotalBalance = previousTotalAmmout - currentWithdraw;
    previousTotalElement.innerText = crrentTotalBalance;

    // Clear the withdraw filed
    withdrawFieldElement.value = '';

})
