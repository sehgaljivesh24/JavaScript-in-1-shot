const score = 100;
console.log(score);

// Specially Defining Number
// Can define Number datatype's value using Number Constructor 
// & hence we are able to see Methods of Number Datatype present in ProtoType Object  
const balance = new Number(400);
console.log(balance);


// Converting Number to String & Now can apply Methods of String
console.log(balance.toString());
console.log(balance.toString().length);


// fixed
console.log(balance.toFixed(2));


const otherNumber = 23.57373;
console.log(otherNumber.toPrecision(5));

// Make it easier to read
const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);






// ============= MATHS ==================
// Math Library comes by default with JS
// There are a lot of Properties & Methods for Math in JS - Just type Math and then '.'

console.log(Math.PI);

// Change to Positive Value
console.log(Math.abs(-45)); 

// Round
console.log(Math.round(4.3));

// CEIL - Zara sa bhi 4 se bada hua - top vali value hi choose kruinga
console.log(Math.ceil(4.3));  

// FLOOR
console.log(Math.floor(4.9));

console.log(Math.max(1,2,3,22,12345));
console.log(Math.min(1,2,3,22,12345));

// RANDOM => 0-1
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


