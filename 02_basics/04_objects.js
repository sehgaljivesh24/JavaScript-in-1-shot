// Singleton is created when Object is created through the Object() Constructor

const tinderUser = new Object(); // SINGLETON Object

tinderUser.id = "123abc";
tinderUser.name = "Jivesh Sehgal";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // Printing Object & its content

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Jivesh",
      lastName: "Sehgal",
    },
  },
};

console.log(regularUser.fullName?.userFullName); // Also Optional Chaining ?.

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { ...obj1, ...obj2 }; // Inserting Properties of Obj1 & Obj2 in Obj3 using ...SpreadOperator
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2); // Properties of Obj1 & Obj2 gets added in {} & returns a new Object
console.log(obj4);

// Array of Object
const users = [
  {
    id: 1,
    email: "jivesh@google.com",
  },
  {
    id: 2,
    email: "ponu@google.com",
  },
];
console.log(users[0].id);

console.log(tinderUser);

// Object.keys() - return array containing keys
console.log(Object.keys(tinderUser));

// Object.values - return array containing values
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

// Kya isLoggedIn naam se property hai?
console.log(tinderUser.hasOwnProperty('isLoggedIn'));