// for-in Loop on Objects
// We can iterate on Objects using for-in Loop
// In case of Objects => it returns keys/properties
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
};

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// ---------------------------------------
console.log('---------------------------------------');
// ---------------------------------------

// for-in loop on Arrays
// In case of arrays -> It returns Indexes
const programming = ['js', 'ruby', 'python', 'cpp'];
for (const key in programming) {
    console.log(key);
}