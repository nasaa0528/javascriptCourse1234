var avgGrade = 100;
switch (true) {
  case avgGrade <= 100 && avgGrade >= 90:
    console.log("he is great student");
    break;
  case avgGrade < 90 && avgGrade >= 80:
    console.log("he is good student");
    break;
  case avgGrade < 80 && avgGrade >= 70:
    console.log("he is fine student");
    break;
  case avgGrade < 70 && avgGrade >= 60:
    console.log("he is student, but not so good");
    break;
  default:
    console.log("He is bad");
}

console.log("line1");
console.log("line2");
console.log("line3");
console.log("line4");
console.log(__dirname);
console.log(__filename);
