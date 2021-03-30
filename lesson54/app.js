// This is prototype
function Animal(name) {
  // *** Constructor *** 
  /*
   * var obj = Object.create(Animal.prototype);
   * obj.name = name;
   * obj.eating = function(food) {
   *  return obj.name + " is eating " + food;
   * };
   * return obj;
  */
  this.name = name;
  /***** THIS IS INEFFICIENT ****
   * this.eating = function(food) {
   *  return this.name + " is eating " + food;
   * }
   * */
}

Animal.prototype.eating = function(food) {
  return this.name + " is eating " + food;
}

//
// new = var obj = Object.create(prototype); return obj;
//let a1 = Animal("Cow");
let a1 = new Animal("Cow");
let a2 = new Animal("Goat");
a2.baa = function() {
  return this.name + " says 'BAA! BAA!' ";
}
console.log(a1.name);
console.log(a1.eating("hay"))
console.log(a2.name);
console.log(a2.eating("hay"))
console.log(a2.baa());


// without new keyword, this will be refering to globalThis
/*
 * function a(){
 *  console.log(this);
 * }
 * a();
 * */

console.log("*************");
let a3 = new Animal("horse");


