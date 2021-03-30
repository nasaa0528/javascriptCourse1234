var h2 = {
  name: "Nasaa",
  age: 28,
  job: "programmer",
};
var c2 = {
  name: "HTML. CSS эхнээс нь дуустал",
  lessconCount: 128,
  totalMin: 1217,
  author: h2,
  price: 146000,
  discount: 26900,
  information: function () {
    console.log(this.author.name + " is teaching the class" + this.name);
  },
  getHour: function () {
    console.log(
      Math.round(this.totalMin / 60) +
        " hours and " +
        (this.totalMin % 60) +
        " minutes"
    );
  },
};
c2.getHour();
