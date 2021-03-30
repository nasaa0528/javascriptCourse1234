let human = {
  name: "",
  age: 0,
  gender: "",
  poop: function() {
    return this.name + " is pooping now";
  },
  pee: function() {
    return this.name + " is peeing ... uh oh!";
  },
  eat: function(meal) {
    return this.name + " is eating " + meal;
  },
  getInfo: function() {
    console.log(`Hi, my name is ${this.name}. I am ${this.age} years old. I am ${this.gender}`);
  }
};

let nasaa = Object.create(human);
nasaa.name = "Nasaa";
nasaa.age = 28;
nasaa.gender = "male";
console.log(nasaa.name);
console.log(nasaa.age);
console.log(nasaa.gender);
console.log(nasaa.poop());
console.log(nasaa.pee());
console.log(nasaa.eat("cereal"));
nasaa.getInfo();
let anu = Object.create(human);
anu.name = "Anu";
anu.age = 24;
anu.gender = "female";

anu.shower = function() {
  return this.name + " is cleaning real good!";
}
console.log(anu.shower());
