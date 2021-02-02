let arr = [];
const swapMinMax = (arr) => {
  let maxInd = arr.indexOf(Math.max(...arr));
  let minInd = arr.indexOf(Math.min(...arr));
  let tmp = arr[maxInd];
  arr[maxInd] = arr[minInd];
  arr[minInd] = tmp;
  return true;
};
for (let i = 0; i < 10; i++) {
  let random = Math.round(Math.random() * 100);
  arr.push(random);
}
console.log(arr);
swapMinMax(arr);
console.log(arr);
