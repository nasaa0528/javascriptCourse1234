// *** Variable Hoisting ****
// console.log(b);
// var b = 12;
// console.log(b);

// *** Function hoisting ***
// x();
function x(a) {
  a();
  console.log("x is function statement/declaration " + a);
}
// x(1);

// y();
const y = () => {
  console.log("y is function expression");
};
// y();

x(y);
