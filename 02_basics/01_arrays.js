// arrays
// Array Heap mein create hogya and uska reference variable mein store hogya
// varaible ki help se array ke elements ko access kr sakte

// 1. Array are Dynamic
// 2. Arrays are untyped and can store values of any datatype
// 3. Use [] Brackets to access elements using index

const myArray = [0,1,2,3,4,5,true,undefined,null];
console.log(myArray[6]);

const myHeroes = ["Batman","Superman","Spiderman"];
console.log(myHeroes[2]);

const myArray2 = new Array(123,12234,`Jivesh is a Rich Man`,`Jivesh owns fucking a lot of properties`);
console.log(myArray2);

// Array has Length Property & we can access Prototype Object 

// Array Methods
myArray.push(69); // Adds element at last
console.log(myArray);

myArray.pop(); // Removes element from last
console.log(myArray);

myArray.unshift(69); // Add element in the beginning
console.log(myArray);

myArray.shift(); // Remove elements from beginning
console.log(myArray);







