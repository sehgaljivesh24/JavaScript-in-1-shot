// forEach Method
// Takes Callback Fn in Argument
// forEach Method calls the Callback Fn one time for each element in the Array
// callback fn takes element as the paramter

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// coding.forEach(function (element) {
//     console.log(element);
// });

// coding.forEach((element) => {
//     console.log(element);
// });

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

coding.forEach((element, index, array) => {
    console.log(element, index, array);
});