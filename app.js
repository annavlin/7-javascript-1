'use strict';

// document.querySelector('.button').addEventListener('click', function () {
//   const input = document.querySelector('.input').value;
//   if (!input) {
//     return;
//   }
//   document.querySelector('.panel').innerText = input;
//   document.querySelector('.input').value = '';
// });

// записываем эту функцию но по -другому

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
  //   document.querySelector('.notification').classList.add('notification_active');
  //   document
  //     .querySelector('.notification')
  //     .classList.remove('notification_hidden');
  // }
  console.log(document.querySelector('.notification').getAttribute('class'));
  document.querySelector('.notification').setAttribute('class', 'notification');
  document.querySelector('.notification').setAttribute('key', 1);
  document.querySelector('.notification').setAttribute('user-id', 1);
  console.log(
    Number(document.querySelector('.notification').getAttribute('user-id'))
  );
}

function inputChanged(e) {
  if (e.code == 'Enter') {
    submitForm();
  }
}
// document.querySelector('.input').addEventListener('.keydown', (e) => {
//   if (e.code == 'Enter') {
//     submitForm();
//   }
// });

function getContentElement() {
  const content1 = document.querySelectorAll('.one>span')[0].innerText;
  console.log(content1);
  const content2 = document.querySelectorAll('.one>span')[1].innerText;
  console.log(content2);
  const content3 = document.querySelector('#two').innerText;
  console.log(content3);
  const content4 = document.querySelector('span[user-id="4"]').innerText;
  console.log(content4);
}

getContentElement();
