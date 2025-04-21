const cities = {
  msk: {
    temp: {
      celcius: 25,
    },
  },
  spb: {},
};
const city = 'spb';
if (cities[city] != undefined && cities[city].temp != undefined) {
  console.log(cities[city].temp.celcius);
}

console.log(
  cities[city]?.temp?.celcius
); /* такая запись показывает '?', что если данных таких нет, то ничего страшного, будет underfined, глубже проверять не пойдем */
