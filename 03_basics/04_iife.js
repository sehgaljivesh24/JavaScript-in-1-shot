// Immediately Invoked Function Expression (IIFE)

// Function immediately execute hojaye
// And global scope ke variables interfere na kr payein - i.e. Global scope ke Pollution se problem hoti hai kahin baar - Uske Pollution ko hatane ke liye

// Just WRAP the whole Function around () Paranthesis and call it
(function chai() {
    // named IIFE
  console.log(`DB Connected`);
})();

// We are defining the Function inside Paranthesis and Calling it
((name) => {
    // Unnamed IIFE
    // name - is a parameter
  console.log(`DB Connected TWO - ${name}`);
})('Jivesh');


// 2 IIFE likhne ke liye, First vale ke aage ; lagado