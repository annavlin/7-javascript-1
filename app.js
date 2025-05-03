'use strict';

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';

  function inputChanged(e) {
    if (e.code == 'Enter') {
      submitForm();
    }
  }
}

localStorage.setItem('token', 'vnfknv');

localStorage.setItem('token1', 1);
localStorage.setItem('token1', true);
const token1 = localStorage.getItem('token1');
console.log(typeof token1);
localStorage.removeItem('token1');
localStorage.clear();
