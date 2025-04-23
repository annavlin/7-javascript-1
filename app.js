const user = {
  name: 'Anton',
  id: 1,
  roles: ['Admin'],
};

// const newUser = Object.assign({}, user);
// user.name = 'NewUser';
// console.log(user);
// console.log(newUser);
// в данном случае будет выводится NewUser     Anton

const newUser2 = {
  ...user /* это называется СПРЕД */,
};
newUser2.name = 'NewUser';
newUser2.roles.push('User');
console.log(user);
console.log(newUser2);
// в данном случае это аналогичная запись вышесказанному
