/* 
Сделать обьект склад с методами добавления на склад, поиска по складку товара и расчет веса */

const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find((g) => g.id == id);
  },
  addGood: function (good) {
    const existedGood = this.findGoodById(good.id);
    if (existedGood) {
      console.log('Этот товар есть на складе');
      return;
    }
    this.goods.push(good);
  },

  getWeightKg: function () {
    return this.goods.reduce(
      (acc, el) => (acc += el.weight?.kg ? el.weight?.kg : 0),
      0
    );
  },
};

/* товары */

const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: 'Ford',
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};
const paper = {
  id: 3,
  color: 'red',
};

const testt = {
  id: 4,
  color: 'blue',
  weight: {
    lb: 6,
  },
};

warehouse.addGood(car);

warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(testt);

console.log(warehouse.goods);
let findedItem = warehouse.findGoodById(6);
console.log(findedItem);
findedItem = warehouse.findGoodById(1);
console.log(findedItem);

const w = warehouse.getWeightKg();
console.log(w);
