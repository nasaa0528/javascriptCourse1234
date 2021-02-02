// n/2 * (2*a + (n-1)*d);
const sum = (beg, n, d) => {
  let sum = (n * (2 * beg + (n - 1) * d)) / 2;
  return sum;
};

console.log(sum(1, 1000, 1));
