const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message;

if (budget > bmwX3Price) {
  message = 'BMW';
} else if (budget > fordFocusPrice) {
  message = 'Ford';
} else {
  message = 'Велосипед';
}

10 > 0 ? console.log('больше 0') : console.log('не больше');
// Это равносильно между собой
if (10 > 0) {
  console.log('больше 0');
} else {
  console.log('не больше');
}

console.log(` я хочу купить ${message}`);
