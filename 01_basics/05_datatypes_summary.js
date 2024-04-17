// DataTypes are of 2 types - Primitive & Reference (Non - Primitive)
// These are based on how the data is stored in memory and how we can access it.

// ********** Javascript is dynamically typed language - no need to specify the datatype of variable


// **********Primitive Datatypes
// Has 7 categories - String, Number, Boolean, null, undefined, bigInt, Symbol
// Jab bhi Primitive Datatype ki value assign kr rhe hote - ek jagah se dusri jagah, 
// toh Inka reference nhi diya jata - bas value ki copy di jati hai
// Jo bhi changes krte hain, voh copy mein hoti hain

const score = 100;

const isLoggedIn = true;

const outsideTemp = null;

let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");



// ***********Reference type (Non - Primitive)
// Has Arrays, Objects, Functions
// Reference pass hota hai
const heros = ["Superman","Batman"];

const obj = {
    name: "Jivesh",
    age: 23
}

function functionName(){
    console.log("My name is Jivesh");
}