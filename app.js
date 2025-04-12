// Цикл в цикле

for (let i = 1; i < 5; i++) {
  console.log(`Цикл 1 - ${i}`);
  for (let j = 1; j < 5; j++) {
    console.log(`Цикл 2 - ${j}`);
  }
}

const tasks2 = [
  [1, 'Задача 1'],
  [2, 'Задача 2'],
];

for (let i = 0; i < tasks2.length; i++) {
  for (let j = 0; j < tasks2[i].length; j++) {
    console.log(tasks2[i][j]);
  }
}

for (let i = 1; i < 5; i++) {
  console.log(`Вывод - ${i}`);
}

let i = 1;
while (i < 5) {
  console.log(`Вывод - ${i}`);
  i++;
}
