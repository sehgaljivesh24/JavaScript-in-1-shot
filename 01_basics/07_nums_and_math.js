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

