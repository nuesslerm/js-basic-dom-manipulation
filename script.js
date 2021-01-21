/*
// const body = document.body;
// body.append('Hello World!');

// const div = document.createElement('div');
// // div.innerText = 'Hello World in Div';

// div.textContent = 'Hello World 2';

// body.append(div);
// // body.appendChild(div);

const div = document.querySelector('div');

console.log(div.textContent); // -> returns text from html (also non-visible)
console.log(div.innerText); // -> only returns visible text


const body = document.body;
const div = document.createElement('div');
const div2 = document.createElement('div');

const strong = document.createElement('strong');
strong.innerText = 'Hi World 2';
div.append(strong);

div2.innerHTML = '<strong>Hello World 2</strong>';

body.append(div);
body.append(div2);
*/

const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

spanBye.remove();

div.append(spanBye);

// div.removeChild(spanHi);

console.log(spanHi.getAttribute('title'));
console.log(spanHi.id);

spanHi.setAttribute('title', 'jojojo');
spanBye.setAttribute('id', 'aisjfoisjdfo');

spanHi.removeAttribute('id');

console.log(spanHi.dataset.test);
console.log(spanHi.dataset.longerName);

spanHi.dataset.newName = 'hi';

spanBye.classList.add('new-class');
spanBye.classList.remove('hi1');
spanBye.classList.toggle('hi2');
spanBye.classList.toggle('hi3');

console.log(spanBye.classList.toggle('hi4', false));
console.log(spanBye.classList.toggle('hi4', true));
console.log(spanBye.classList.toggle('hi4', true));
console.log(spanBye.classList.toggle('hi4', false));
console.log(spanBye.classList.toggle('hi4', false));

spanHi.style.color = 'red';
spanBye.style.backgroundColor = 'red';
