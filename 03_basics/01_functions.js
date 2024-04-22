// Functions - memory management, packages
// Function is a piece of code which once defined, can be invoked over and over again.

// function definition
function sayMyName() {
  // function Body
  for (let i = 0; i < 5; i++) {
    console.log("Jivesh Sehgal");
  }
}
sayMyName();

// sayMyName - It is reference
// sayMyName() - function call krdiya execute hone ke liye

// Function define krte time, jo bhi input lete hain unehin Parameter kehte hain
function add2numbers(num1, num2) {
  console.log(num1 + num2);
}

// Function ko call krte time jo values pass hoti hai - unehein Argument kehte hain
add2numbers(2, 3);

// Function can return values
function add3Numbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

const num = add3Numbers(3, 4, 5);
console.log(num, typeof num);

function logInUserMessage(userName) {
  return `${userName} just logged in`;
}

console.log(logInUserMessage("Jivesh Sehgal"));
console.log(logInUserMessage()); // No argument is passed, Hence variable's value will be undefined


// Default Parameters
function logInUserMessage2(userName = "Sam") {
    // If no value is passed - default value is Sam for userName
    return `${userName} just logged in`;
}
console.log(logInUserMessage2()); // When no argument is passed when function is called, we have default option