/* 
Сделать обьект склад с методами добавления на склад, поиска по складку товара и расчет веса */

const warehouse = {
  goods: [],
  findGoodById: function (id) {
    const good = this.goods.find((good) => good.id === id);
    return good;
  },
  addGood: function (good) {
    this.goods.push(good);
  },

  getWeightKg: function (id) {
    const good = this.findGoodById(id);
    console.log(good);
    if (good?.weight?.kg) {
      return good.weight.kg;
    }

    return 0;
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
console.log(warehouse.findGoodById(2));
console.log(warehouse.getWeightKg(4));
