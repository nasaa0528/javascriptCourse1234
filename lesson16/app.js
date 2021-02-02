var h1 = {
  name: "Nasaa",
  age: 28,
  job: "Programmer",
  hobby: "watch movies",
};
var h2 = {
  name: "Byambaa",
  age: 28,
  job: "Programmer",
  hobby: "work out",
  address: {
    city: "Ulaanbaatar",
    country: "Mongolia",
  },
};
console.log(1);
console.log(h1);
console.log(h2);
console.log(
  h1.job + " мэрэжилтэй " + h1.name + "-ийн хобби бол " + h1.hobby + " юм."
);
console.log(
  h2.job + " мэрэжилтэй " + h2.name + "-ийн хобби бол " + h2.hobby + " юм."
);

var c1 = {
  name: "javascript-ийг эхнээс нь дуустал",
  lessonCount: 116,
  totalMin: 904,
  author: h1,
  price: 199000,
  discount: 26900,
};
var c2 = {
  name: "HTML/CSS-ийг эхнээс нь дуустал",
  lessonCount: 128,
  totalMin: 1217,
  author: h2,
  price: 199000,
  discount: 26900,
};

console.log(
  c1.author.name + "-ийн зохиосон '" + c1.name + "' хичээлийг би үзэж байна."
);
console.log(c2.author.address.city);
