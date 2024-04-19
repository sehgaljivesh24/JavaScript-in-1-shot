const marvel_heroes = ["Thor","IronMan","SpiderMan"];
const dc_heroes = ["Superman","Batman","Flash"];

marvel_heroes.push(dc_heroes); // Whole Array gets inserted as a element
console.log(marvel_heroes);
console.log(marvel_heroes[3]); // Gives the whole array

marvel_heroes.pop();

// Concat Method 
const newArray = marvel_heroes.concat(dc_heroes); // Combines 2 or more arrays and return new array
console.log(newArray);


// Spread Operator - Elements Spread ho jate hain 
const allNewHeroes = [...marvel_heroes,...dc_heroes];
console.log(`allNewHeroes: `,allNewHeroes);

// Flatten Array
const anotherArray = [1,2,3,[4,5,6],4,7,[6,7,[4,5]]];
console.log(`anotherArray: `,anotherArray);

const realAnotherArray = anotherArray.flat(1); // Returns a new Array
console.log(`realAnotherArray: `,realAnotherArray);



// Array.isArray() & Array.from()
console.log(Array.isArray('Hitesh'));
console.log(Array.from('Jivesh'));  // Converting String into Array


// Creating array out of individual values
let score1 = 100;
let score2 = 200;
let score3 = 300;

const newArray2 = Array.of(score1,score2,score3);
console.log(newArray2);