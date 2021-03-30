var numbers = [12, 13, 17, 20, 21, 56, 8, 99, 1123, 14];

let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 7 === 0) {
    console.log("there are number that can be divided into 7");
    break;
  }
  i++;
}

for (const item of numbers) {
  if (item % 7 !== 0) continue;
  console.log("There we are");
  break;
}
