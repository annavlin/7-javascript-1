const role = 'manager';

if (role === 'manager') {
  console.log('Менеджер');
} else if (role === 'Admin') {
  console.log('Админ');
} else if (role === 'ceo') {
  console.log('CEO');
} else {
  console.log('Мы тебя не знаем!');
}

switch (role) {
  case 'manager':
    console.log('Менеджер');
    break;
  case 'admin':
    console.log('Админ');
    break;
  case 'ceo':
    console.log('CEO');
    break;
  default:
    console.log('Мы тебя не знаем!');
}
