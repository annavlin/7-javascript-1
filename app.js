'use strict';

/*
создайте обьект пользователя с паролем. 
С помощью функции ниже удалить пароль сделав функцию сброса пароля */

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
}
const user = {
  password: '12345',
};

const userPassword = removePassword.bind(user, true);
userPassword();
console.log(user);
