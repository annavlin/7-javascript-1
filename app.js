/*
Есть выгрузка операций пользователя 
const operations = [1000, -700, 300, -500, 10000];
а также начальный баланс в 100$
Необходимо сделать функции расчета:
- Итогового баланса
- Наличия отрицательного баланса ( если после очередной операции баланс < 0, то выдавать false)
- Расчета среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const balance = 100;

function calculateBalance(initBalance, listOperations) {
  let total = initBalance;

  for (let i = 0; i < listOperations.length; i++) {
    total = total + listOperations[i];
  }
  console.log(total);
  return total;
}
calculateBalance(balance, operations);

function minusBalance(initBalance, listOperations) {
  let total = initBalance;

  for (let i = 0; i < listOperations.length; i++) {
    total = total + listOperations[i];
    if (total < 0) {
      return false;
    }
  }

  console.log(total);
  return true;
}
console.log(minusBalance(balance, operations));

function middleBalance(listOperations) {
  let earnSum = 0;
  let expendSum = 0;
  let earnCount = 0;
  let expendCount = 0;

  for (let i = 0; i < listOperations.length; i++) {
    if (listOperations[i] < 0) {
      expendCount = expendCount + 1;
      expendSum = expendSum + listOperations[i];
    }
    if (listOperations[i] > 0) {
      earnCount = earnCount + 1;
      earnSum = earnSum + listOperations[i];
    }
  }

  const middleExpend = expendSum / expendCount;
  const middleEarn = earnSum / earnCount;

  return [middleEarn, middleExpend];
}
console.log(middleBalance(operations));
