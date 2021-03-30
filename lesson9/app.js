/* alert */
/* 
var age = 37;
age++;
age--;
age += 10;
age *= 2;
age /= 4;
alert("Hello, you are " + age + " years old");
alert("Hello?\n\nHow are you doing today?"); 
*/

/* Prompt */
/* 
var birthDate = prompt("What is your age: ");
const currentYear = new Date().getFullYear();
console.log("sain uu " + 3); // "sain uu 3"
console.log("sain uu " - 3); // NaN
alert("Hello, your age is: " + currentYear - birthDate); // NaN
steps:
// 1. "Hello, your age is: 2020"
// 2. "Hello, your age is: 2020" - 1992 
*/

/* 
var age = currentYear - birthDate;
alert("Hello, your age is: " + age);
var message = "hello, your age is " + (currentYear - birthDate);
alert("Hello, your age is: " + (currentYear - birthDate));
alert(message);
*/

/* IF STATEMENT */
var birthDate = prompt("Please enter your birthyear: ");

if (birthDate !== null) {
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthDate;
  var message = "Hello, You are " + age + " years old!";

  if (age >= 18) {
    console.log("You are an adult!");
    alert(message);
  } else if (age > 15) {
    console.log("You're high school student");
    alert("You're high school student");
  } else {
    alert("You're small, kiddo");
    alert(message);
  }
} else {
  alert("Sorry you have to enter your birthdate!");
}
