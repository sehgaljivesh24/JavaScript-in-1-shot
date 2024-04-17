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



// ******************************************************************
// 2 types of memory - Stack & Heap

// Stack (Primitive)=> value ki copy milti hai
// Heap (Non-Primtive/ Reference) => reference milta hai "original value" ka - original value mein hi changes hote hain

let myYoutubeName = "JiveshSehgal";


// ******* AMAZING Notes
// Ek Variable mein koi bhi datatype ki value store kr sakte hain

// Let's Suppose - Ek Variable mein Primitive Datatype ki value stored hai
// Ab hum, dusra variable banate hain - usmein agar hum first variable ko assign kr deingein - then first variable mein stored value ki copy create hokar second variable mein store ho jayegi.


// Now Let's suppose - Ek variable mein hum Reference Datatype ki value store kr rhe - Then it stores reference of original value
// Humne 2nd variable banaya - and we try to assign the value stored in first variable, - then it will store the reference of value which first variable was storing
