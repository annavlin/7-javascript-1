const prices = [
  [2, 4],
  [3, 4],
  [10, 20],
];
const res = prices.flat();
const res2 = prices.flatMap((el) => el.concat([1]));

console.log(res);
console.log(res2);

/* flat- делает функцию плоской, вытаскивает все из скобок и обьединяет в одну, изначальная глубина () = 1, но можно савить свое значение глубины */
/* flatMap делает те же функции, что и flat и map оп отдельности, только сначала выполняется map, затем flat */
