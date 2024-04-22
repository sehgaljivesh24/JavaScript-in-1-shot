// Object is unordered collection of Properties, where each property has a name & a value

// Objects ko declare krne ke 2 tareeke hain
// 1. Object Literal ki tarahain & 2. Object Constructor ki tarahain

// Singleton sirf Object Constructor mein banta hai
// Object.create


// Creating a symbol - declaring a symbol
const mySym = Symbol('key1');

// Object Literal
const JsUser = {
    name: "Jivesh",
    "full name":"Jivesh Sehgal",
    [mySym] : "myKey1", // Added Symbol as Property Name
    age: 23,
    location: "Patiala",
    email: 'jivesh@google.com',
    isLoggdIn: false,
    lastLogginDays: ["Monday","Saturday"]
};

// Access Properties of object using . or []
// JsUser["email"];  // Internally Property names are denoted in string
console.log(JsUser.name);
console.log(JsUser["name"]);

// If we want to access a Property whose name has multiple words - we can't do it using dot
console.log(JsUser['full name']);


// How to use SYMBOL - as a key in property or include in Object
console.log(JsUser[mySym]);


// Changing Values of a Property
JsUser.email = "jiveshsehgal@google.com";


// FREEZING the Object - We can prevent Object adding or changing value of its properties
// Object.freeze(JsUser); 
JsUser.email = "jivesh@chatgpt.com"; // value has not been changed
console.log(JsUser.email);

console.log(JsUser);

// JsUser Object mein 'greeting' naam ki property add krdi, jismein humne ek function define krke usko assign krdiya
// 'greeting' naam ki property holds the reference of the function and can be used to call it.
JsUser.greeting = function(){
    console.log("Hello jS User");
}

JsUser.greeting(); // JsUser ki greeting property mein jo fn hai usse call kra

console.log(JsUser.greeting); // JsUser ki 'greeting' property stores the reference of the function


// If we want to access the Properties of Object inside the Function - use this keyword
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name} `); // Prints Hello JsUSer & value stored in the Calling Object's name property
};

JsUser.greetingTwo();