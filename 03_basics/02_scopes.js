// Global & Local Scope
// Scope ki kahani shuru hi let, const and var se hoti hai

// {} = Curly Braces = Curly Braces hi scope hai
// Har jagah {} dikhega

// let a = 10;
// const b = 20;
// var c = 30;

var c = 300;
// Variables a,b,c are declared in 'if' scope and should not be available to use outside of this scope
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c); // Variable declared with var - can be accessed outside of 'if' scope ---- BIGGEST PROBLEM

// PROBLEM  -----  variable 'c' ki value override hogyi in 'if' conditional statement

// IMPORTANT  --- Any variable declared in {} -- is in Block Scope/ Local Scope

// IMPORTANT  --- Any variable declared in the file outside of {}  -- is in Global Scope & can be accessed in any {}

// ---------------------------------------------------------------------------------------------------------------------------
let x = 200;
console.log(x);

if (true) {
  let x = 25;
  console.log("Inner:", x);
}
console.log(x); // x = 200

// If a variable is declared using let in global scope & same variable created in {} local/Block scope, it does not change the value of variable created in global scope
