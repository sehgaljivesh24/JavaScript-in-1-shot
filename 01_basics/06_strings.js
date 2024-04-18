// String can be denoted by "", '' or `` (Back Ticks)
const name = "Jivesh";
const repoCount = 50;

console.log(repoCount + name);
console.log(repoCount);

// ********* IMP - Denote Strings Using Back Ticks ``
// It is easier to write because it gives an option to INJECT values stored in variables DIRECTLY using PLACEHOLDER
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// More readable and Modern way => STRING Interpolation


// 2nd way to Create STRING
const gameName = new String('Jiveshjs');
console.log(gameName);

// We can access Characters in the String using stringName[index]
console.log(gameName[2]);

console.log(gameName.__proto__); // We can access Methods - PROTOTYPE OBJECT using DOT Operator


// Length Property
console.log(gameName.length);

// Can access other methods also on string
console.log(gameName.toUpperCase()); // It does not make changes to Original Value - Because these are Primitive Datatypes
console.log(gameName.indexOf('t'));




// ************* IMP
// gameName variable mein jo string datatype ki value stored hai usmein 't' char ka index lakar do
// gameName variable mein jo string datatype kivalue stored hai, uski length kitni hai