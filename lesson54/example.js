function Animal() {
}

Animal.prototype.eating = function() {
  console.log(" eating ");
}


let a1 = new Animal;
//let a1 = new Animal(); IS EQUAL TO let a1 = new Animal
a1.eating();
