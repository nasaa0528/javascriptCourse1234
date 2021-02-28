//construction function
function Materi(une, ungu){
  this.ungu = ungu;
  this.une = une;
  //this.haragdah = function(){
    //console.log(une + " unetei baina.")
  //}
}

Materi.prototype.haragdah = function(){
  console.log(this.une + " unetei baina.");
}

function Amitan(nas, une, ungu){
  Materi.call(this, une, ungu); // inheritance duudah;
  this.nas = nas;

}

Amitan.prototype = Object.create(Materi.prototype);
Amitan.prototype.hoolloh = function() {
  console.log(this.nas + " nastai " + this.une + " uentei " + this.ungu + " ungutei amitan hoollov ");
}

var m1 = new Materi(1000000, "green");
m1.haragdah();

var a1 = new Amitan(5, 150, "alag");
console.log(a1.__proto__.__proto__);
a1.haragdah();
a1.hoolloh();

function Hun(ner,nas,une,ungu,skill){
  Amitan.call(this, nas,une,ungu);
  this.ner = ner;
  this.skill = skill;
}

Hun.prototype = Object.create(Amitan.prototype);
Hun.prototype.ajillah = function() {
  console.log(this.ner + " ajillaj baina");
}
Hun.prototype.setgeh = function(bodol) {
  console.log(this.ner + " nertei, " + this.nas + " tai " + " hun " + bodol + " bodov." );
}

var h1 = new Hun("John Wick", 25, 5000, "black", "killer machine");
console.log(h1);
h1.haragdah();
h1.hoolloh();
h1.ajillah();
h1.setgeh("amidral");
