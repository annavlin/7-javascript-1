const user = {
  name: 'Вася',
  surname: 'Пупкин',
  age: 24,
  getFullName: function () {
    return this.name + ' ' + this.surname; /* это метод! */
  },
};
console.log(user.getFullName());
