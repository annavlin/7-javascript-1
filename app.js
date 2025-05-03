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

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div'); //создать новый элемент
// устанавливаем атрибуты и классы
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel'); // добавляем css-класс
// newElement.innetHML = 'Кнопка';
newElement.innerHTML = `<button class="${panelClass}">${panelText} </button>`;
document.querySelector('.test').appendChild(newElement);
