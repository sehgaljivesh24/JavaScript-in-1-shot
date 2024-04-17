let score = "33abc"; // This is not a number, hence when it is converted - it gives NaN
console.log(typeof score);

// Converts string value to number datatype  -- pass the variable in Number() method
let valueInNumber = Number(score);

console.log(valueInNumber); // NaN
console.log(typeof valueInNumber); 

// NaN is also a type & we can check it if any value has given it or not.