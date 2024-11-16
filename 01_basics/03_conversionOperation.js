// Converting values in NUMBER

let score = "33abc"; // This is not a number, hence when it is converted - it gives NaN
// console.log(typeof score);

// Converts string value to number datatype  -- pass the variable in Number() method
let valueInNumber = Number(score);

// console.log(valueInNumber); // NaN
// console.log(typeof valueInNumber); 

// NaN is also a type & we can check it if any value has given it or not.


// *** NOTES
// What happens when we try to convert values to Number
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => 0
// true => 1; false => 0



// Converting values in BOOLEAN

let loggedIn = undefined;

let valueInBoolean = Boolean(loggedIn);

console.log(valueInBoolean);
console.log(typeof valueInBoolean);

// ***NOTES
// Javascript automatically converts values to Boolean
// Falsy Values => 0, "" (Empty String), false, null, undefined - will be converted to - false
// Truthy Values => All values except these will be converted to - TRUE




let someValue = false;

let valueInString = String(someValue);
console.log("valueInString", valueInString);
console.log("typeof valueInString", typeof valueInString);



// ******************** OPERATIONS *******************
let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1 = "Hello ";
let str2 = "Jivesh";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(1 + "2");
console.log("1" - 2);