/* PART-1 */

//let p1 = {
  //name: "Boldoo",
  //job: "programmer",
  //info: function() {
    //console.log(this.name + " is " + this.job);
  //}
//};

//p1.info();

//let p2 = {};

//p2.name = 'Saraa';
//p2.job = 'accountant';
//p2.info = function () {
  //console.log(this.name + " is " + this.job);
//};
//p2.info();

//String.prototype.sainuu = function() {
  //console.log("sainuu tells hello");
//}

//console.log(String);
//"hi".sainuu();



// PART-2
// Object - Materi will inherit from Object
// Object will inherit from null;
var materi = {
  name: "bodis",
  haragdah: function() {
    console.log(this.name + " materi haragdlaa");
  }
};
console.log(materi.__proto__);
var amitan = Object.create(materi);
amitan.name = "amitan";

// function overriding
amitan.haragdah = function() {
  console.log(this.name + " end baina"); // override
}

// create functions
amitan.hoolloh = function() {
  console.log(this.name + " hoollov.");
}

amitan.hudluh = function() {
  console.log(this.name + " hudluv");
}

var hun = Object.create(amitan);
hun.name = "hun";
hun.tushaalAvah = function(command){
  console.log(this.name + " gets " + command + " tushaal avlaa ");
}

var tsereg = Object.create(hun);
tsereg.name = "boldoo";
tsereg.tulaldah = function() {
  console.log(this.name + " tulaldaj baina");
}

console.log(tsereg.name);
tsereg.haragdah();
tsereg.hoolloh();
tsereg.hudluh();
tsereg.tushaalAvah("KILL HIM!");
tsereg.tulaldah();
console.log(tsereg.hasOwnProperty());
console.log(tsereg.toString());
//console.log(tsereg.__proto__.__proto__.__proto__.__proto__.__proto__);



var tagnuul = Object.create(hun);
tagnuul.name = "Eagle";
tagnuul.tushaalAvah("TAGNA NOVSHOO");
