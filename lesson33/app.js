console.log(age);
printAge();

var age = 23;
printAge("Насантогтох", "Монгол", "Улаанбаатар", 28);
printAge("Анужин", "Монгол", "Улаанбаатар", 24);
console.log(age);

function printAge(name, country, city, age) {
  //   var age = 33;
  //   console.log(age);
  console.log(arguments);
  console.log(
    country +
      " улсын " +
      city +
      " хотод амьдардаг " +
      name +
      " нь " +
      age +
      " настай"
  );
}
