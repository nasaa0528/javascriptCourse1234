function sayHello() {
  var friend = "Saraa";
  howDoYouDo();
  function howDoYouDo() {
    console.log("How do you do " + friend);
  }
}
sayHello();
