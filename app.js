const balance = 100;
const bonusBalance = 1000;
const isBanned = false;
const isSelling = true;
const isExist = false;

const canBuy =
  (balance > 1000 || bonusBalance > 100) && !isBanned && isSelling && !isExist;
console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);
