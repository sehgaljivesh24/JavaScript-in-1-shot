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
  console.log("Inner:", x); // x = 25 is printed
}
console.log(x); // x = 200

// If a variable is declared using let in global scope & same variable created in {} local/Block scope, it does not change the value of variable created in global scope

// -----------------------------------------------------------------------------------------------------------------------------

// Important -- Global Scope is different in Node environment & in Browser

// -----------------------------------------------------------------------------------------------------------------------------

// Nested Scope

// Rule - Chote agar Bade se Ice Cream mangein toh chalta hai, Par agar Bade chote se mange toh kharab lagta hai

function one() {
  const userName = "Jivesh";

  function two() {
    const website = "youtube";
    console.log("userName accessed inside two():", userName);
  }
  //   console.log(website); // can't be accessed outside 'two'

  two();
}
// Sabse Bada - one hai , Chota two hai   -- Chote ke liye uske bahar sab kuch Global hi hai
// 'Two', 'One' ke saare variables access kr sakta hai BUT 'One', 'Two' ke variables access nhi kr sakta  -- Bcoz 'Two' ke scope ke bahar se kese access krein
// Jo bhi variable 'Two' mein declare kre voh andar hi mar gye
one();

// InShort - Child function, Parent fn ke variables ko access kr pata and Parent Child ke andar ke nhi kr pata

// -----------------------------------------------------------------------------------------------------------------------------

// In case of 'if' statements

if (true) {
  const userName = "Jivesh Sehgal";
  if (true) {
    const website = "youtube";
    console.log(userName + website);
  }
  // console.log(website);
}
// console.log(userName);
