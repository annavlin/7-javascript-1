const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  skills: ['Программирование', 'Готовка'],
  eduBasic: 'Школа 10',
  eduPro: 'МФТИ',
};

console.log(user);
console.log(user.skills); /* этот варинат записи используем по максимуму */
console.log(
  user['skills'] /* этот вариант записи, только если надо произвети расчеты */
); /* есть разница между этими двумя выражениями (в квадратных скпобках можно производить вычисления) */

const level = 'Pro';
console.log(user['edu' + level]);

const res = prompt('Введите свойство');
console.log(user[res]);
