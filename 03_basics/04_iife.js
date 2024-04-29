// Immediately Invoked Function Expression (IIFE)

// Function immediately execute hojaye
// And global scope ke variables interfere na kr payein - i.e. Global scope ke Pollution se problem hoti hai kahin baar - Uske Pollution ko hatane ke liye

// Just WRAP the whole Function around () Paranthesis and call it
(function chai() {
  console.log(`DB Connected`);
})();

// We are defining the Function inside Paranthesis and Calling it
