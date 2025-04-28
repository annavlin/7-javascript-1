'use strict';
//IIFE

function init() {
  console.log('Start');
}
init();

(function () {
  console.log('Start IIFO');
  const a = 1;
})(); //это своего рода "инкапсуляция", все, что происходит в пределах этой функции просиходит только в ней, но это уже устаревает
