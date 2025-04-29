'use strict';
const panelText = document.querySelector('.panel').innerHTML;
console.log(panelText); //выводится "I love this!"
document.querySelector('.panel').innerText = 'New text'; //в консоле останется I love this!, но на экране выведется New text
document.querySelector('.input').value = 'Text';

// addEventListener('load', () => {
//   console.log(document);
// });

//начиная работу так или же можно перенести 'script src="./app.js"' в body в конец, оставив просто console.log(document);
