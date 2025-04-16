const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users);
users.sort();
console.log(users);
//в данном случае sort сортирует массивы по алфавиту

const operations = [100, -300, -100, 50, 480];
console.log(operations);

// < 0 - a, b -сохраняем порядок
// > 0 - b,a- меняем порядок

operations.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});
console.log(operations);

// дальше короткий вариант верхней записи
operations.sort((a, b) => a - b);
console.log(operations);

operations.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
});
console.log(operations);
