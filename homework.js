//1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;
const newHeader = document.getElementById("header");
newHeader.innerText = "Welcome";

//2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;
const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.style.color = 'green';
    link.style.backgroundColor = 'beige';
});

//3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;
const newParagraph = document.createElement("p");
newParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
document.body.appendChild(newParagraph);

//4. Напиши функцию, которая удаляет элемент с указанным ID из документа;
const removeHome = document.getElementById("home");
removeHome.remove();

//5. Измени атрибут ссылки на новый URL и выведи его значение в консоль;
const wikiLink = document.getElementById("wikipedia");
wikiLink.setAttribute('href', 'https://www.wikipedia.org/');
const wikipediaHref = wikiLink.getAttribute('href');
console.log(wikipediaHref);

//6. Создай новый элемент, добавь к нему класс и добавь его в DOM;
const contactButton = document.createElement("button");
contactButton.className = "contact-btn";
contactButton.innerText = "Contact us";
document.body.appendChild(contactButton);

//7. Переключи класс у существующего элемента и проверьте его наличие в консоли.
contactButton.classList.toggle('active');



