const generatePassword = require('generate-password');


function generateAndLogPassword() {
  const password = generatePassword.generate({
    length: 12,            
    numbers: true,         
    symbols: true,         
    uppercase: true,       
    strict: true,          
  });

  console.log(password);
}


generateAndLogPassword();