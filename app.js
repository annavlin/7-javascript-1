/* Реализовать методы увеличения и уменьшения баланса, при котором каждая операция сохраняется в массив operations в виде {reason: 'Оплата налогов', sum: -100}. Возвращается true, если успешно и false, если не хвататет баланса. Также реализовать метод вывода числа опреаций по кошельку.
 */

const wallet = {
  balance: 0,
  operations: [],
  increaseBalance: function (sumInput, reasonInput) {
    this.balance += sumInput;
    this.operations.push({ reason: reasonInput, sum: sumInput });
    return true;
  },
  decreaseBalance: function (sumInput, reasonInput) {
    if (this.balance - sumInput < 0) {
      return false;
    }
    this.balance -= sumInput;
    this.operations.push({ reason: reasonInput, sum: -sumInput });
    return true;
  },
  operationsCount: function () {
    return this.operations.length;
  },
};

console.log(wallet.increaseBalance(330, 'Шоппинг'));

console.log(wallet.decreaseBalance(110, 'Зоомагазин'));
console.log(wallet.decreaseBalance(110, 'Зоомагазин'));
console.log(wallet.decreaseBalance(110, 'Зоомагазин'));

console.log(wallet.operationsCount());
