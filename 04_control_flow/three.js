// for of loop

// Most of the time, we will get multiple objects in array
// And we need to perform operation on them at each iteration

// let array1 = [{}, {}, {}];
const arr = [1, 2, 3, 4, 5];

// Object and Arrays, Strings all are Iterable
// for of loop can be applied on both of them
// Syntax -> for(let element of object){}
// On which object we want to apply the loop on
// It will automatically iterate over Array  and gives us element

for (let element of arr) {
    console.log(element);
}

// for of loop - on String
// Iterate on each individual character
const greetings = "Hello World";
for (const char of greetings) {
    console.log(char);
}

// ---------------------------------------
console.log('---------------------------------------');
// ---------------------------------------

// Maps DS
// It is also a Data Structure
// Data is stored in key,value pair
// Keys should be unique (should occur once)
// Original Insertion Order is maintained
//

// Creating a new map object
const map = new Map();
// map.