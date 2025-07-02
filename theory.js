
//Доступ к элементам DOM
//getElementById: возвращает элемент по его уникальному идентификатору.

const header = document.getElementById('header');
console.log(header);
console.log(header.textContent);

//getElementsByClassName: возвращает коллекцию всех элементов с указанным классом.
const buttons = document.getElementsByClassName('btn');
for (let button of buttons) {
    console.log(button.textContent);
}

//getElementsByTagName: возвращает коллекцию всех элементов с указанным тегом
const buttons2 = document.getElementsByTagName('button');
for (let button of buttons2) {
    console.log(button.textContent);
}

//querySelector: возвращает первый элемент, соответствующий указанному CSS-селектору.
const firstButton = document.querySelector('.btn');
console.log(firstButton.textContent);

//querySelectorAll: Возвращает все элементы, соответствующие указанному CSS-селектору.
const allButtons = document.querySelectorAll('.btn');
allButtons.forEach((button) => {
    console.log(button.textContent);
})

//Изменение содержимого и структуры DOM
//innerHTML: Изменяет HTML содержимое элемента.

const newButton = document.getElementById('btn-container');
newButton.innerHTML = '<button>Button</button>';


//textContent: Изменяет текстовое содержимое элемента.
const newHeader = document.getElementById('header');
newHeader.textContent = 'New Header';

//Изменение атрибутов:
//getAttribute: Получает значение атрибута элемента.
//🛠 Пример 1: Получение href у ссылки
const link = document.getElementById('wikipedia');
const hrefValue = link.getAttribute('href');
console.log(hrefValue);

//🛠 Пример 2: Пользовательский атрибут data-*
const product = document.getElementById('product');
const productId = product.getAttribute('data-id');
const category = product.getAttribute('data-category');

console.log(category);
console.log(productId);

//🛠 Пример 3: Получение класса элемента

const container = document.getElementById('btn-container');
const containerClassValue = container.getAttribute('class');
console.log(containerClassValue);

//setAttribute: Устанавливает значение атрибута элемента.

const youtubeLink = document.getElementById('youtube');
youtubeLink.setAttribute('href', 'https://www.youtube.com/');

//Создание и удаление элементов:
//createElement: Создает новый элемент. + appendChild: Добавляет новый элемент как дочерний.

const newDiv = document.createElement('div');
newDiv.textContent = 'New Div'; // div создан в памяти но не будет выведет на страницу
document.body.appendChild(newDiv); // append child выведет див на страницу внизу body

//removeChild: Удаляет дочерний элемент.
const removeDiv = document.getElementById('btn-container');
removeDiv.parentNode.removeChild(removeDiv);

const removeHeader = document.getElementById('header');
removeHeader.remove();







