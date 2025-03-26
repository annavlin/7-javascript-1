const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

// let message;

// if (budget > bmwX3Price) {
//   message = 'BMW';
// } else if (budget > fordFocusPrice) {
//   message = 'Ford';
// } else {
//   message = 'Велосипед';
// }

// 10 > 0 ? console.log('больше 0') : console.log('не больше');
// // Это равносильно между собой
// if (10 > 0) {
//   console.log('больше 0');
// } else {
//   console.log('не больше');
// }
// // также укороченный вариант
// const str = 10 > 0 ? 'больше 0' : 'не больше';
// console.log(str);

// // укороченный вариант написания верхней записи
// console.log(` я хочу купить ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`);

let message =
  budget > bmwX3Price ? 'BMW' : budget > fordFocusPrice ? 'Ford' : 'Велосипед';

console.log(`Я хочу купить ${message}`);
