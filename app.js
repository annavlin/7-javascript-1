'use strict';
const b = 1;
const a = {
  b,
  getB: function () {
    return this.b;
  }, //можно записывать в двух разных вариантах одно и то же
  getBAlt() {
    return this.b;
  },
};
console.log(a.getBAlt());
