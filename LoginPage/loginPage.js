'use strict';

document.getElementById('loginButton').addEventListener('click',function(event){
    event.preventDefault(); 
    let username = document.getElementById('username').value;
    let passwordInput = document.getElementById('password');
    let passwordValue = passwordInput.value;

   
    
    if (username.trim() === '') {
        const usernameError = document.getElementById('usernameError');
        usernameError.textContent = 'Username is required!';
    }

    if(!validation(passwordValue)){
        const passwordError = document.getElementById('passwordError');
        passwordError.textContent = 'Password validation failed!';
        passwordError.style.display = 'block';

    }else{
        window.location.href = '../Recipe/recipePage.html';
    }
}
    );