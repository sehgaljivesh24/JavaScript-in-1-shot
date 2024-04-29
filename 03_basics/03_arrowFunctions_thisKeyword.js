const user = {
  userName: "Jivesh Sehgal",
  age: 23,
  price: 999,

  // Object mein welcomeMessage naam ka method add kiya hai
  // When Object calls its method and that method wants to access the Object's Properties - 'this' keyword is used
  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to Website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.userName = "Sam";
user.welcomeMessage();
// console.log(user.welcomeMessage);

// 'this' keyword - holds the reference of current object

// ----------------------- IMPORTANT
// In node environment - 'this' = {} Empty Object
// In Browser - 'this' keyword = refers to Window Object (which is JavaScript's Global object)
// ----------------------- END

console.log(this);

// Jab hum object ka method call kreingein - uss function ke andar object ki properties ko access krne ke liye - 'this' keyword ka use kreingein
// this - matlab currentObject

// Printing value of 'this' keyword inside Function Declaration
// function chai() {
//   let userName = "Jivesh";
//   console.log(this.userName);
// }

// chai(); // this only works when Object is in context

// Printing value of 'this' keyword inside Function Expression
// const chai = function () {
//   let userName = "Jivesh";
//   console.log(this.userName);
// };

// Printing value of 'this' keyword inside Arrow Function
const chai = () => {
  let userName = "Jivesh";
  console.log(this); // returns empty Object
};

chai();

// Arrow Functions ko Variable mein bhi hold kr sakte hain
// Variable stores reference of arrow function
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(2, 4));

// Implicit Return - Only 1 line inside Curly Brackets that too return
// const addThree = (num1, num2, num3) => num1 + num2 + num3;

const addThree = (num1, num2, num3) => num1 + num2 + num3; // Jo return kr rhe Paranthesis mein wrap krdo
console.log(addThree(1, 2, 3));

const Objreturn = () => ({ userName: "Jivesh" });
console.log(Objreturn);
