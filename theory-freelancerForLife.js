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

const elems = document.querySelectorAll('li');
console.log(elems[2]);

for (const item of elems) {
    console.log(item);
}

//to search in collections put in variables
const sublist = document.querySelectorAll('.sublist');
const sublistItems = sublist[0].querySelectorAll('li');
console.log(sublistItems);

//insert elements into DOM
const textElement = document.querySelector('.lesson-text');//existing element we rely on
const newElement = document.createElement('div'); // new element we want to place in DOM
newElement.innerHTML = `JavaScript is fun!`

//before the object
//textElement.before(newElement);

//after the object
//textElement.after(newElement);

//...inside and in the begging of the existing object we're working with
//textElement.prepend(newElement);

//inside and in the end of existing element we're working with
textElement.append(newElement, 'Hello World!');

//insertAdjacentHTML
const existingElement = document.querySelector('.insertHTML');
existingElement.insertAdjacentHTML(
    'afterbegin',
    `<button class="btn"> click me!</button> <br>`
);
//afterbegin
//beforebegin
//beforeend
//afterend

//перенос узлов
// i alrteady have variable with div lesson-text = textElement
const headerText = document.querySelector('h1');
console.log(headerText);
textElement.prepend(headerText);

//получаем obj
//i already have this - existingElement
//clone without childen elements
const cloneElementEmpty = existingElement.cloneNode();
const cloneElementFull = existingElement.cloneNode(true);
//we need to insert it
//i choose to insert in inside of second div
const secondDiv = document.querySelector('.second');
console.log(secondDiv);
secondDiv.append(cloneElementEmpty);
secondDiv.prepend(cloneElementFull);

//adding class
const btn = document.querySelector('.btn');
btn.classList.add('active');

for (let className of btn.classList) {
    console.log(className);
}

//style
btn.style.color = 'red';
//margin-bottom
btn.style.marginBottom = '30px';
//z-index
btn.style.zIndex = '1';

//получаем значение свойства но это возможно только в том случае если оно записано
//в атрибуте style in html

console.log(btn.style.color);

//сброс стиля
btn.style.zIndex = '';

//cssText
btn.style.cssText = `
    font-weight: bold;
    font-size: 30px;
`
//getComputedStyle
const h1Style = getComputedStyle(headerText);
console.log(h1Style.color);

//parseInt
const paddingTop = parseInt(h1Style.marginTop);
console.log(paddingTop);

//attributes properties
console.dir(headerText);
console.dir(btn);
const link = document.querySelector('a');
console.log(link.href);

//custom attributes
//check if element has specific attribute
console.log(headerText.hasAttribute('name'));
//get element's specific attribute
const headersName = headerText.getAttribute('name');
console.log(headersName);

//set attribute name
headerText.setAttribute('title', 'example');
//remove attribute
headerText.removeAttribute('name ');

//custom attributes
headerText.setAttribute('my-attribute', 'ok');

if (headerText.hasAttribute('my-attribute')) {
    console.log(`my attribute is here`)
}

//синхронизация между атрибутами и св вами
//получаем эл
const myInput = document.querySelector('.my-input');

myInput.setAttribute('id', '123');
console.log(myInput.id);

myInput.id = "321";
console.log(myInput.getAttribute('id'));

//✅ Сначала: что такое атрибут и что такое свойство?
// 🔹 Атрибут (attribute) — это то, что написано в HTML:

// <input class="my-input" id="123">
// Здесь id="123" — атрибут элемента.
//
// 🔹 Свойство (property) — это то, что доступно через JavaScript, как часть объекта DOM.
// Когда браузер читает HTML, он создаёт объект JavaScript (myInput), у которого есть свойства: id, className, value и так далее.
//
// ✅ Теперь разбор кода

// const myInput = document.querySelector('.my-input');
// 🔸 Это выбирает элемент с классом my-input и сохраняет его в переменную myInput.
//
// 🔹 Строка 1:
// myInput.setAttribute('id', '123');
// 🔸 Ты устанавливаешь атрибут id на значение "123".
//
// ➡️ Теперь в HTML элемент выглядит так:
// <input class="my-input" id="123">

// 🔹 Строка 2:
// console.log(myInput.id);
// 🔸 Это доступ к СВОЙСТВУ id у объекта myInput.
//
// ➡️ Оно возвращает "123", потому что:
//
// Когда ты установил атрибут id, свойство id тоже автоматически синхронизировалось.
//
// 🔹 Строка 3:

// myInput.id = "321";
// 🔸 Теперь ты меняешь СВОЙСТВО id на "321".
//
// ➡️ Важно: при этом автоматически обновляется и HTML-атрибут id.
// Теперь элемент выглядит так:
// <input class="my-input" id="321">
// 🔹 Строка 4:
// console.log(myInput.getAttribute('id'));
// 🔸 Это чтение АТРИБУТА id напрямую из HTML.
//
// ➡️ И он тоже будет "321", потому что он обновился вместе со свойством.

//Действие	Что происходит
// setAttribute(name, val)	Устанавливает атрибут в HTML. Иногда обновляет и свойство.
// element.property = val	Устанавливает свойство DOM. Часто обновляет и атрибут.
// getAttribute(name)	Возвращает атрибут, записанный в HTML.
// element.property	Возвращает свойство, которое можно изменять.
//
// ⚠️ Исключения и нюансы
// Не все атрибуты и свойства ведут себя синхронно.
//
// Например:

// const input = document.querySelector('input');
// input.value = 'Привет';              // меняет значение в поле
// input.setAttribute('value', 'Пока'); // меняет только атрибут в HTML, не влияет на текущее значение в поле
// ➡️ Тут value работает по-другому: атрибут "value" задаёт начальное значение, а свойство "value" — текущее значение поля.
//
// 📌 Итог
// В HTML — это атрибуты (<input id="123">).
//
// В JavaScript — это свойства (input.id).
//
// Они связаны, но не всегда синхронны полностью, особенно для value, checked, selected.


//dataset


//cool propetries
//get el tag
console.log(link.tagName);

//hide or show element
btn.hidden = true;
console.log(btn.hidden);



