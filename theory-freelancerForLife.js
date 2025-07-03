//WINDOW
const windowWidth = window.innerWidth;
console.log(`Window width is: ${windowWidth}px`);

//BOM
// browser information using navigator object
console.log(navigator.userAgent);

if (navigator.userAgent.includes('Chrome')) {
    console.log('Chrome browser');
} else if (navigator.userAgent.includes('Firefox')) {
    console.log('Firefox browser');
}

//get url info using location object
//get url of actual page
console.log(location.href);
//change url
//location.href = "https://youtube.com"

//browser history using history object
// history.back();
// history.forward();

//communication with user

//alert
//alert('hello world!');

//confirm
//const confirmResult = confirm('do you want to enter?')

//prompt
// const promptResult = prompt('what is your name?');
// console.log(promptResult);

//DOM
const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
console.log(bodyElement);

const firstChild = bodyElement.firstChild;
const lastChild = bodyElement.lastChild;
console.log(firstChild);
console.log(lastChild);
const bodyChildNodes = bodyElement.childNodes;
console.log(bodyChildNodes);

console.log(bodyElement.hasChildNodes());

for (let node of bodyChildNodes) {
    console.log(node);
}

//SIBLINGS +  PARENT properties - NODES

const previousSiblingNode = bodyElement.previousSibling;
console.log(previousSiblingNode);
const nextSiblingNode = bodyElement.nextSibling;
console.log(nextSiblingNode);
const parentNode = bodyElement.parentNode;
console.log(parentNode); // we will get the entire html because we are looking at the body tag

// SIBLINGS - ONLY ELEMENTS
const bodyChildren = bodyElement.children;
console.log(bodyChildren);

const firstElementChild = bodyElement.firstElementChild;
console.log(firstElementChild);
const firstElementParent = firstElementChild.parentElement;
console.log(firstElementParent);

//querySelectorAll

const yellow = document.querySelectorAll('.yellow');
console.log(yellow);

const divElement = document.querySelectorAll('div');
console.log(divElement);

const firstDiv = document.querySelectorAll('div.first');
console.log(firstDiv);

const menuItems = document.querySelectorAll('.menu>li');
console.log(menuItems);

const menu = document.querySelectorAll('.menu, .red');
console.log(menu);

const menuInSecondDiv = document.querySelectorAll('.second .menu');
console.log(menuInSecondDiv); //only ul with menu class stored in div with second class

