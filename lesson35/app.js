// this variable
// console.log(this);
// hello();
function hello() {
  console.log("inside Hello");
  console.log(this);
}

let p1 = {
  name: "boldoo",
  printThis: function () {
    console.log(this);
    second();
    function second() {
      console.log("second:", this);
    }
  },
};

var p2 = {
  name: "Naraa",
};

p1.printThis();
// Function borrowinh

p2.printThis = p1.printThis;
p2.printThis();
