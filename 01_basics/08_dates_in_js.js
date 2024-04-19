let myDate = new Date();
// These all give convert date into different formats
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate); // It is an Object


const myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());