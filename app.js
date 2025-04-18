/* отсортировать пользователей по возрасту */

const users = [
  { name: 'Вася', age: 30 },
  { name: 'Катя', age: 18 },
  { name: 'Аня', age: 40 },
  { name: 'Петя', age: 25 },
];

users.sort((a, b) => a.age - b.age);
console.log(users);
