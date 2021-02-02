const sum = (beg, n, d) => {
  let sum = (n * (2 * beg + (n - 1) * d)) / 2;
  return sum;
};
// first item = 7
// 142 th item = 994
// d = 7
let sumOfDividableSeven = sum(7, 142, 7);
console.log(sumOfDividableSeven);
