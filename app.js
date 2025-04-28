'use strict';

/* 
Сделать функцию пользователя, которая берет за основу userInfo и за счет замыкания создает новый обьект, с которым можно работать как user1().increse(100) */

const userInfo = {
  balance: 0,
  operations: 0,
  increse(sum) {
    this.balance += sum;
    this.operations++;
  },
};

function user() {
  const userObj = userInfo;
  return function () {
    return userObj;
  };
}

const user1 = user();
user1().increse(100);
user1().increse(100);
console.log(user1());
