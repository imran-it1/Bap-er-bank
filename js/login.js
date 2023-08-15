// step 1 --> Add click event handler to the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step 2 --> Get the email input field & Value
    const emailField = document.getElementById('input-email');
    const email = emailField.value;
    // Step 3 --> Get the password field & Value
    const passField = document.getElementById('input-password');
    const password = passField.value;
    


    // Condition Part
    if(email === 'imran@gmail.com' && password === 'secret'){
        alert('Valid User')
    }
    else{
        alert('Invalid User')
    }
})