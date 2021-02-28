var img = {
  file: "c:/images/a123.png",
  content: "cat",
  objectDetect: function() {
    console.log("Image has " + this.content);
  },
  colorDetect: function(color) {
    console.log("Image has " + color + " " + this.content);
  }
};

img.objectDetect();


var myImg = {
  file: "c:/images/a124.png",
  content: "dog",
};

// bind - function-iig copy hiij, this reference deer duriin utga uguh bolomj olgodog.
console.log("***Method borrowing Example***")
/* BIND */
var mySuperImageDetector = img.objectDetect.bind(myImg);
var mySuperImageDetector = img.colorDetect.bind(myImg, "bindy color");
mySuperImageDetector();
console.log("******************************")
myImg.objectDetect = img.objectDetect;

// Method borrowing by directly assigning
console.log("***Method borrowing by assigning ***");
myImg.objectDetect();
console.log("************************************");


// call-Tustei zuil hiih bolovch tuhain function-iig shuud duudna, gehdee this deer uur variable zaaj uguh bolomjtoi
console.log("***CALL***");
img.objectDetect.call(myImg, /*list of arguments for the method*/);
img.colorDetect.call(myImg, "reddish");
console.log("**********");

// apply - call-tai ijil bolovch, damjuulah argument-uudiig ni array-aar ugdug.
let args = ['red'];
console.log("***APPLY***");
img.objectDetect.apply(myImg, /*list of arguments for the method*/);
img.colorDetect.apply(myImg, args);
console.log("***********");

