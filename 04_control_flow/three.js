// for of loop

// Most of the time, we will get multiple objects in array
// And we need to perform operation on them at each iteration

// let array1 = [{}, {}, {}];
const arr = [1, 2, 3, 4, 5];

// Maps, Arrays and Strings all are Iterable NOT Objects
// for of loop can be applied on both of them
// Syntax -> for(let element of object){}
// On which object we want to apply the loop on
// It will automatically iterate over Array  and gives us element

for (let element of arr) {
    // console.log(element);
}

// for of loop - on String
// Iterate on each individual character
const greetings = "Hello World";
for (const char of greetings) {
    // console.log(char);
}

// ---------------------------------------
console.log('---------------------------------------');
// ---------------------------------------

// Maps DS
// It is also a Data Structure
// Data is stored in key,value pair
// Keys should be unique (should occur once)
// Any value (both objects and primitive values) may be used as either a key or a value.
// Original Insertion Order is maintained
// A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration


// Creating a new map object
const map = new Map();
map.set('IN', 'India');
map.set('USA', "United States of America");
map.set('FR', "France");

console.log(map);

// If we try to add key,value pair in Map when key already exists -> It will override the previous value 
// Adding 'IN', 'Nigeria'
map.set('IN', 'Nigeria');
console.log(map);

map.set('IN', 'India');

// Looping in Map - Returns 2 member array [key,value] for each iteration
// 0th index represents 'key' and 1st index representas 'value'
for (let arr of map) {
    console.log(`Key is ${arr[0]} and value is ${arr[1]}`);
}
// Destructuring of Array
for (let [key, value] of map) {
    console.log(`Key is ${key} and value is ${value}`);
}

// ---------------------------------------
console.log('---------------------------------------');
// ---------------------------------------


// for-of Loop on Objects
const myObj = {
    'name': 'Jivesh Sehgal',
    'age': 23,
    'profession': 'Software Engineer'
};

for (const property of Object.keys(myObj)) {
    console.log(myObj[property]);
}