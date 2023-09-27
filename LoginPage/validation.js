'use strict'

function validation(password){
    if(typeof password!=='string'){
        console.log('Password is not a string!');
        return false;
    }

   const regexTwoRepetedCharacters= /^(?!.*(.)\1\1)[A-Za-z0-9!\"#$%&'()=*?+@{}[\]:;]*$/;
   const regexAtLeastTwoSpecialCharacters=/(?:[!\"#$%&'()=*?+@{}[\]:;].*){2,}/;
  
    if(password.length<6&&password>24){
        console.log('Password length must be between 6 and 24 characters!');
    
    }

    if (!/[A-Z]/.test(password)) {
        console.log('Password must have at least one uppercase letter!');
        
      }

      if (!/[a-z]/.test(password)) {
        console.log('Password must have at least one lowercase letter!');
        
      }

      if (!/[0-9]/.test(password)) {
        console.log('Password must have at least one digit!');

      }

      if(!regexTwoRepetedCharacters.test(password)){
        console.log('Password must include maximum two repeted characters!')
      }

      if(!regexAtLeastTwoSpecialCharacters.test(password)){
        console.log('Password must have at least two special characters (! “ # $ % & ‘ ( ) = * ? + @ { } [ ] : ;)');
        
      }
    
}
