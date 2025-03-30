// введение в функции

function logName(name, surname) {
  console.log(`Мое имя ${name} ${surname}`);
}

logName('Антон', 'Ларичев');

function countDepositSum(depositinUSD, month, rate) {
  return (sum = depositinUSD * (1 + rate / 12) ** month);
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

// анонимные функции

function powerOfTwo(num) {
  return num * num;
}
console.log(powerOfTwo(5));

const poft1 = function (num) {
  return num * num;
};
console.log(poft1(6));

// стрелочные функции

function powerOfTwo(num) {
  return num * num;
}
console.log(powerOfTwo(5));

// const poft2 = (num) => num * num;
const poft2 = (num) => {
  console.log(num);
  return num * num;
};
console.log(poft2(6));

// Упражнение (сделвать из обычной функции стрелочную)
function toPower(num, power) {
  const res = num ** power;
  return res;
}

console.log(toPower(2, 3));

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(2, 3));

// функции в функциях\
const KG_In_USD = 7;
const Km_In_USD = 5;

function calculateW(present) {
  return present * KG_In_USD;
}

function calculateKm(distance) {
  return distance * Km_In_USD;
}

function getExchangePrice(present1, present2, distance) {
  const price1 = calculateW(present1);
  const price2 = calculateW(present2);
  const distancePrice = calculateKm(distance);
  return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1, 2, 10));

// !!!Упражнение Кредит на MacBook!!!

// Пользователь:
// - Возраст
// - Наличие работы
// - Деньги
// Нужно проверить, может ли он купить новый макбук за 2000$?
// Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24х лет и он имеет работу, 100$ если ему просто больше 24х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false;

// const money = 1600;
// const isWorking = true;
// const age = 25;

function canBuyMacbook(age, isJob, money) {
  const priceMakBook = 2000;

  const credit500 = age > 24 && isJob === true;
  const credit100 = age > 24;
  if (money >= priceMakBook) {
    return true;
  }

  if (credit500) {
    return money + 500 >= priceMakBook;
    // через переменную
    // const canBuy = money + 500 >= priceMakBook;
    // return canBuy
  }
  if (credit100) {
    return money + 100 >= priceMakBook;
  }
  return false;
}

console.log(canBuyMacbook(25, true, 1500));

// Через свич
function computerCredit(age, hasJob = false) {
  switch (true) {
    case age > 24 && hasJob:
      return 500;
    case age > 24:
      return 100;
    default:
      return 0;
  }
}

function canBuy(productPrice, age, money, hasJob = false) {
  const creditMoney = computerCredit(age, hasJob);
  return productPrice <= money + creditMoney;
}
console.log(canBuy(2000, 25, 1500, true));
