const secretNumber = '7';

if (Number(secretNumber) === 7) {
  console.log('Угадал строго');
}

if (Number(secretNumber) == 7) {
  console.log('Угадал не строго');
}

const q = prompt('Введите число');
if (q == 7) {
  console.log('Угадал не строго');
}
