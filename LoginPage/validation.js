'use strict';

function validation(password){
    if(typeof password!=='string'){
        console.log('Password is not a string!');
        return false;
    }

  let isValid=true;

   const regexTwoRepetedCharacters= /^(?!.*(.)\1\1)[A-Za-z0-9!\"#$%&'()=*?+@{}[\]:;]*$/;
   const regexAtLeastTwoSpecialCharacters=/(?:[!\"#$%&'()=*?+@{}[\]:;].*){2,}/;
  
    if(password.length<6&&password>24){
        console.log('Password length must be between 6 and 24 characters!');
        isValid=false;
    }

    if (!/[A-Z]/.test(password)) {
        console.log('Password must have at least one uppercase letter!');
        isValid=false;
      }

      if (!/[a-z]/.test(password)) {
        console.log('Password must have at least one lowercase letter!');
        isValid=false;
      }

      if (!/[0-9]/.test(password)) {
        console.log('Password must have at least one digit!');
        isValid=false;
      }

      if(!regexTwoRepetedCharacters.test(password)){
        console.log('Password must include maximum two repeted characters!')
        console.log(password)
        isValid=false;
      }

      if(!regexAtLeastTwoSpecialCharacters.test(password)){
        console.log('Password must have at least two special characters (! “ # $ % & ‘ ( ) = * ? + @ { } [ ] : ;)');
        isValid=false;
      }

      if(!isValid){
        console.log('Password validation failed!');
      }else{
        console.log('Password is valid!')
      }
      
    return isValid;
    
}
