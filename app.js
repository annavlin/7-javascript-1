const str = 'Вася Пупкина';
console.log(str.includes('a'));
console.log(str.startsWith('В')); /* ищет слово, которое начинается с 'В' */
console.log(str.endsWith('н')); /* ищет слово, которое заканчивается на 'н' */

console.log(str.toLowerCase()); /* пишет все строчными буквами */
console.log(str.toUpperCase()); /* пишет КАПСОМ*/
console.log(str.replace('В', 'Ф'));
/* меняет буквы местами 'Фася Пупкин'
 */
console.log(str.replaceAll('а', 'и')); /* меняет ВСЕ буквы А на букву И */

const str2 = ' Вася Пупкина   \n';
console.log(str2.trimStart()); /* убирает пробелы с начала */
console.log(str2.trimEnd()); /* убирает пробелы с конца */
