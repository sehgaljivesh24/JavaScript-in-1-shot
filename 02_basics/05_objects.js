// Object Destructuring => Means extracting values from Object
const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// console.log(course.courseName);

// Syntax -> const {konsi properties ki value extract krni hai} = kahain se value extract krni hai 
// Below we are extracting values from 'course' object
// We can use the property name to access the values
const { courseInstructor, price } = course;
console.log(courseInstructor);
console.log(price);

// We can give variable names in which we want to store values of extracted properties
// Syntax -> const {propertyName: variableName} = object
const { courseName: NameOfTheCourse } = course;
console.log(NameOfTheCourse);