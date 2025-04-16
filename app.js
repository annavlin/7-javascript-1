/* проверить является ли это номером телефона России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56  ';

/*  неверные */

const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function checkPhoneNumber(phoneNumber) {
  console.log(phoneNumber);
  console.log(Number(phoneNumber));
  const res = phoneNumber
    .replaceAll('+', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll(' ', '')
    .replaceAll('-', '');
  if (isNaN(Number(res))) {
    return false;
  }
  if (res.length !== 11) {
    return false;
  }
  if (res.startsWith('8') || res.startsWith('7')) {
    return true;
  }
  return false;
}

console.log(checkPhoneNumber(num4Error));
