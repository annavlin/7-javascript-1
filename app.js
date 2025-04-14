const operations = [100, -20, 7, -30, 50];

let balance = 0;
for (const operation of operations) {
  balance += operation;
}

console.log(balance);

const finalBalance = operations.reduce((acc, operation, i) => {
  console.log(`Итерация ${i}, acc: ${acc}, operation ${operation}`);
  return (acc += operation);
}, 0);

console.log(finalBalance);

const minElement = operations.reduce((acc, operation, i) => {
  if (operation > acc) {
    return acc;
  }
  {
    return operation;
  }
}, 0);
console.log(minElement);

// 0 - acc = 0, operation = 100
// 0 - acc = 100, operation = -20
