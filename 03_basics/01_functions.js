// Functions - memory management, packages
// Function is a piece of code which once defined, can be invoked over and over again.

// 1. function definition
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

// 2. Default Parameters
function logInUserMessage2(userName = "Sam") {
  // If no value is passed - default value is Sam for userName
  return `${userName} just logged in`;
}
console.log(logInUserMessage2()); // When no argument is passed when function is called, we have default option

// 3. Rest Parameters
// Lets suppose we have defined a function which takes only 1 input - Parameter & as when we call this function we pass more than 1 arguments
// So the TASK is used to store them under 1 variable with help of - ...restOperator
function calculateCartPrice(val1, val2, ...restParameter) {
  // restParameter is the array which stores the arguments in it
  let sum = 0;
  restParameter.forEach(function (value) {
    sum += value;
  });

  return sum;
}
let cartValue = calculateCartPrice(100, 200, 300, 250);
console.log(cartValue);

// Example -
const user = {
  userName: "Jivesh",
  age: 23,
  price: 199,
};

// In these type of scenario's type safety needs to be considered - Lets suppose price property is actually prices then what to do
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

handleObject(user);
