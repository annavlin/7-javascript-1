// Массивы
const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';
console.log(users);
// users[4] = 'Никита';
// console.log(users);

const arrLenght = users.push('Никита');
console.log(users);
console.log(arrLenght);

users.unshift('Вася'); //добавляет в начало, смещая другие
console.log(users);

users.pop(); //удаляет массив
console.log(users);

const el2 = users.shift();
console.log(el2);
console.log(users);

// slice метод (отрезает кусок, выборка от того числа, которое мы указали и если есть второе то до второго числа-второй элемент не включается)

const roles = ['user', 'admin', 'manager', 'superuser'];

const res1 = roles.slice(2, 3);
console.log(roles);
console.log(res1);

const res2 = roles.slice(0, 2);
console.log(res2);

const res3 = roles.slice(-1);
console.log(res3);

const res4 = roles.slice(1, -1); //при отрицательном индексе считаем с конца
console.log(res4);

//splice

const res5 = roles.splice(2);
console.log(res5);
console.log(roles);

//reverse

const res8 = roles.reverse();
console.log(res8);

//concat (добавляется к старому массиву новый)

const newRoles = ['sisadmin', 'developer'];
const res9 = roles.concat(newRoles);
console.log(res9);

/* 
Дан список задач
const tasks = ['Задача 1'];
Сделать функции:
- Добавление задачи в конец
- Удаление задачи по названию
- Перенос задаси в начало списка по названию 
Всегда меняем исходный массив
 */
const tasks = ['Задача 1', 'Задача 2'];

function addToEnd(task) {
  tasks.push(task);
}
addToEnd('Задача 3');
console.log(tasks);

function deleteTaskByName(taskName) {
  console.log(tasks.indexOf(taskName));
  const index = tasks.indexOf(taskName);
  if (index >= 0) {
    tasks.splice(index, 1);
  }
}
deleteTaskByName('Задача 2');
console.log(tasks);

function moveToStart(taskName) {
  const index = tasks.indexOf(taskName);
  deleteTaskByName(taskName);
  if (index >= 0) {
    tasks.unshift(taskName);
  }
}
moveToStart('Задача 3');
console.log(tasks);

let res = 1;
function toPower(num, power) {
  res = num ** power;
  return res;
}

console.log(toPower(2, 3));
res = 99;
console.log(res);
