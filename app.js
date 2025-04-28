'use strict';

const user = {
  firstName: 'Вася',
  lastName: 'Пупкин',
  age: 20,
  getUserInfo: function () {
    console.log(`${this.firstName} ${this.lastName}`);

    const canDrink = () => {
      if (this.age >= 18) {
        console.log('Можно уже пить!');
      } else {
        console.log('Не может пить!');
      }
    };
    canDrink();
  },
  getUserInfoArrow: () => {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
user.getUserInfo();
user.getUserInfoArrow(); //в этом случае будет выводится underfined underfined, потому что стрелочные функции не употребляются с this

//но при этом если делать вторую функцию в обьекте, может показать ошибку, поэтому лучше ее заменить на стрелочную функцию

//если нужно в обьекте использовать какое-то свойство и не потерять контекст- использовать обычную функцию, стрелочная функция будет показывать ошибку
// если же внутри метода/обьекта нужно получить доступ this, при этом этот this должен быть в функции- здесь уже можно использоват стрелочную функцию, потому что контекст будет браться извне
