const user = {
  userName: "Jivesh Sehgal",
  age: 23,
  price: 999,

  // Object mein welcomeMessage naam ka method add kiya hai
  // When Object calls its method and that method wants to access the Object's Properties - 'this' keyword is used
  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to Website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.userName = "Sam";
user.welcomeMessage();
// console.log(user.welcomeMessage);

// 'this' keyword - holds the reference of current object

// ----------------------- IMPORTANT
// In node environment - 'this' = {} Empty Object
// In Browser - 'this' keyword = refers to Window Object (which is JavaScript's Global object)
// ----------------------- END

console.log(this);

// Jab hum object ka method call kreingein - uss function ke andar object ki properties ko access krne ke liye - 'this' keyword ka use kreingein
// this - matlab currentObject
