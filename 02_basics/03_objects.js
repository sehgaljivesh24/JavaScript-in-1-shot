// Object is unordered collection of Properties, where each property has a name & a value

// Objects ko declare krne ke 2 tareeke hain
// 1. Object Literal ki tarahain & 2. Object Constructor ki tarahain

// Singleton sirf Object Constructor mein banta hai
// Object.create


// Object Literal
const JsUser = {
    name: "Jivesh",
    age: 23,
    location: "Patiala",
    email: 'jivesh@google.com',
    isLoggdIn: false,
    lastLogginDays: ["Monday","Saturday"]
};

// ByDefault property names are stored in form of strings
console.log(JsUser.name);
console.log(JsUser["name"]);


