// var name = "Naraa";
// var job = "artist";
// switch (job) {
//   case "teacher":
//     console.log("He is an educator");
//     break;
//   case "artist":
//     console.log("He is creative");
//     break;
//   case "programmer":
//     console.log("He can develop website");
//     break;
//   default:
//     console.log("I have no idea what he does");
// }

var avgGrade = 68;
switch (true) {
  case avgGrade >= 90 && avgGrade <= 100:
    console.log("He is great student");
    break;
  case avgGrade >= 80:
    console.log("He is good student");
    break;
  case avgGrade > 70:
    console.log("He is fine student");
    break;
  case avgGrade >= 60:
    console.log("He is student, but not so good");
    break;
  default:
    console.log("Either he is bad or grade is invalid");
}
