/*
Написать функцию, которая возвращает true, если элемент есть, и false, если нет */

const arr = [2, 4, 4, 10, 20];
// function some(arr, el) {
//   let result = arr.findIndex((element) => element === el);
//   if (result < 0) {
//     return false;
//   }
//   return true;
// }

// console.log(some(arr, 10));

function some(array, element) {
  const res = array.find((el) => el === element);
  return res == undefined ? false : true;
}

console.log(some(arr, 10));
console.log(arr.some((el) => el === 10));
