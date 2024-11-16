// console.log(window);
// console.log(document);
// console.log(document.body);
// const element = document.createElement('div'); // Creating element
// element.innerText = "Adding Element via JavaScript"; // Adding text inside element
// document.body.appendChild(element); // Adding element at end of Body Element of Document
// console.log(document.documentElement);

// Id and Class Selectors
// const divWithId = document.getElementById('div-id');
// divWithId.style.color = "red";
// divWithId.style.textDecoration = "underline";
// divWithId.style.fontWeight = "bold";
// divWithId.style.fontSize = "20px";

// Class Selector
// const elementsWithClass = document.getElementsByClassName('div-class');
// const elementsWithClassArray = Array.from(elementsWithClass); // Converts anything which is like an array - into Array
// console.log(elementsWithClassArray);
// console.log(elementsWithClassArray[0]);
// elementsWithClass[0].style.color = "orange";


// Query Selector
// console.log(document.querySelector('.div-class'));
// console.log(document.querySelector('#div-id'));
// console.log(document.querySelector('[data-test]'));

// const divsWithClasses = document.querySelectorAll('.div-class');
// console.log(divsWithClasses);

// const dataAttributeElement = document.querySelector('[data-test]');
// dataAttributeElement.style.color = "blue";
// dataAttributeElement.style.backgroundColor = "lightBlue";
// dataAttributeElement.style.fontSize = "20px";
// dataAttributeElement.style.fontWeight = "bold";

// Event Listeners
// const btn = document.querySelector('[data-btn]');
// console.log(btn);
// btn.addEventListener('click', function (event) { // IMPORTANT
//     console.log('Button clicked');
//     console.log(event);
// });
// function printClick() {
//     console.log('Button clicked');
// }
// btn.addEventListener('click', printClick);
// btn.removeEventListener('click', printClick);
// const input = document.querySelector('[data-input-text]');
// console.log(input);
// input.addEventListener('change', function (event) {
//     // Event triggers when there is change in the input (after the change has been made)
//     console.log('changed');
//     console.log(event);
// });
// input.addEventListener('input', function () {
//     console.log('input');
// });
// input.addEventListener('input', function (event) {
//     console.log(event.target.value == "Hello");
// });

const formElement = document.querySelector('[data-form]');
formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Submitted Form');
});
// const inputElement = document.querySelector('[data-input-text]');
// const submitBtnElement = document.querySelector('[data-btn]');

const anchorElement = document.querySelector('[data-a]');
anchorElement.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Link Clicked');
});