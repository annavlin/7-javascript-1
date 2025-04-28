'use strict';
//обьекты состоят из 3х составляющих:
// 1. let, var, const, function, arguments
// 2. Scope chain
// 3. this

function sumNum(num1, num2) {
  console.log(this);
  console.log(arguments);
  return num1 + num2;
}
console.log(sumNum(1, 4, 3, 7));

const sumNumArr = (num1, num2) => {
  console.log(this);
  console.log(arguments);
  return num1 + num2;
};
console.log(sumNumArr(1, 4, 3, 7));
