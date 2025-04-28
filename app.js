'use strict';

function changeBalance() {
  let balance = 0;
  return function (sum) {
    balance += sum;
    console.log(`Баланс: ${balance}`);
  };
}

//Замыкание - связь окружения функции и Change. Функция помнит, в каком контексте она была создана и может его использовать. Замыкание имеет более высокий приоритет с переменными родительскими

const change = changeBalance();
change(100);
change(-50);
change(200);
