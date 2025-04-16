/* вытащить имя и фамилию в отдельные переменные */

const userName = 'Вася aka Terminator Perdinator Пупкин';

console.log(userName.slice(0, 4));
console.log(userName.indexOf('Пуп'));
console.log(userName.slice(31, 37));

console.log(userName.length);

// Еще вариант
const fullUserName = 'Вася aka Terminator Perdinator Пупкин';

const shortUserName = fullUserName.slice(0, fullUserName.indexOf(' '));
console.log(shortUserName);
const userSurname = fullUserName.slice(
  fullUserName.lastIndexOf(' ') + 1,
  fullUserName.length
);
console.log(userSurname);
