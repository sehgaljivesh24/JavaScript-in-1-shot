const userEmail = "h@hitesh.ai";

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Dont have user email");
}

// Falsy Values - which convert to false
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// Falsy Values ke ilava jo bhi hain voh - true mein convert hoti hain

// "0", "false", " " - String ke andar kuch bhi ho - Truthy value hi hogi
// [], {}, function(){} - Truthy Value

let array = [];
if (array.length === 0) {
  console.log("Array is empty");
}

let emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined
// Real situation mein hota kya hai ki - Kahin baar hum Database ko call lagate hain but koi reponse na ane pr
// hum - null hi store krva dete hain

// The nullish coalescing operator (??) is a logical operator in JavaScript that returns 
// its right-hand side operand when its left-hand side operand is null or undefined, 
// and otherwise returns its left-hand side operand

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1);
