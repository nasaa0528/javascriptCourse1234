// Value
// Primitive Data Types gets value of that variable -- Undefined, null, boolean, number, string, Symbol,
// Reference Data Type = Object
var a = 12; // a === > 12
var b = a; // b gets copy of 12 or value of a
console.log(a);
console.log(b);

b = 1; // b, which is not related to a is assigned new value 1
console.log(b);

let o1 = {
  name: "notebook",
  price: "300$",
};

let o2 = o1;
console.log("o1: ", o1);
console.log("o2: ", o2);

o2.name = "it is fucket up";
console.log("o1: ", o1);
console.log("o2: ", o2);

console.log(typeof [1, 2, 3]);
var name = "Computer Science Book";
var price = 30000;
console.log(price);
info(name, price);
console.log(price);
function info(name, price) {
  price -= 5000;
  console.log(
    name + " is on SALE, it is ONLY " + price + "$ NOW!. Get yours right now."
  );
}

var prod = {
  name: "book1",
  price: 55000,
};

function newInfo(product) {
  product.price -= 10000;
  console.log(product.name + " is now " + product.price + ". GET YOURS NOW!");
}

console.log(prod);
newInfo(prod);
console.log(prod);
