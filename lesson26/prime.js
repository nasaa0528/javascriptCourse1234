const isPrime = (number) => {
  let first = 2;
  let half = Math.floor(number / 2);
  let prime = true;
  for (let i = first; i <= half; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};
console.log(2);
for (i = 3; i <= 1000; i += 2) {
  if (isPrime(i)) {
    console.log(i);
  }
}
