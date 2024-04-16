// 1. Variables and constants
// Constant - Jisko ek baar declare krdiya usko change na kr pauin
// Declaring constant
const accountId = 1233445

// Variables declare krne ke 2 tareeke hain - let & var(not used)
let accountEmail = "jivesh@google.com";
var accountPassword = "12345";
accountCity = "Patiala";

// Variable is declared but value is not assigned to it -- Output = Undefined.
let accountState;

/*
Prefer not to use var
Because of Block Scope and Function Scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState]);
