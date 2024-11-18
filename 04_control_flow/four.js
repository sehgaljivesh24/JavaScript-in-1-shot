// for-in Loop on Objects
// We can iterate on Objects using for-in Loop
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
};

for (const key in myObject) {
    console.log(myObject[key]);
}