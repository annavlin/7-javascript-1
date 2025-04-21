const arr = [1, 3, 4];
const [z, y, x] = arr;
console.log(x); /* выведется в консоль '4' */

let user = {
  name: 'Вася',
  age: 40,
  city: 'Moscow',
};

// const { age, name } = user;
// console.log(age);
// console.log(name);

const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge); /* в консоле будет все, кроме возраста */

const additionalData = {
  skills: ['Разработка', 'Дизайн'],
  credicCard: '2342-2345-2734-2356',
};

user = {
  ...user,
  ...additionalData,
};
console.log(user);
