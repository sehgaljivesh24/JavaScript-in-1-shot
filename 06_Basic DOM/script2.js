// const divParent = document.getElementsByClassName('parent');
let parent = document.querySelector('div.parent');
// console.log(parent);
// console.log(parent.children); // Returns HTML Collection - Array Jaisa
// console.log(parent.children[0]);
// console.log(parent.children[0].innerText);
// console.log(parent.children[0].innerHTML);

// let childElements = parent.children;
// for (let i = 0; i < childElements.length; i++) {
//     const element = childElements[i];
//     console.log(element.innerHTML);
// }

// Access Child Element of the Parent Element
// parent.children[1].style.color = "orange";
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

let dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log(parent.childNodes);
