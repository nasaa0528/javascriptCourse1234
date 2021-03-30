//console.log(typeof Math);

//var math = {
  //abs: function(too) {
    //if(too < 0) {
      //return -too;
    //} else {
      //return too;
    //}
  //}
//}

//console.log(math.abs(-18));
//console.log(math.abs(200));

//console.log(Math.floor(12.9));
//console.log(Math.ceil(12.3));
//console.log(Math.round(12.5));
//console.log(Math.sqrt(16));
//console.log(Math.random());
//console.log(Math.max(10,20));
//console.log(Math.min(9,12));
//console.log(Math.pow(2,64));
//console.log(Math.sin(12));

var birthYears = [1981, 2005, 1978, 1986, 2010];
//function showAges(){
  //var ages = [];
  //birthYears.forEach((by) => {
    //ages.push(new Date().getFullYear() - by);
  //});
  //console.log(ages);
  //ages.forEach((age) => {
    //console.log(isAdult(age));
  //})
  //console.log(maxHeartRate(ages));
//}

//console.log(new Date().getFullYear());
//showAges();

//function isAdult(age) {
  //return age >= 18 ? true: false;
//}

//function maxHeartRate(ages){
  //let arr = [];
  //ages.forEach((age) => {
    //arr.push(Math.round(206.9 - 0.67 * age));
  //});
  //return arr;
//}

function processArr(arr, fn){
  let tmp = [];
  arr.forEach((item) => {
    tmp.push(fn(item));
  })
  return tmp;
}

const showAge = (year) => new Date().getFullYear() - year;
const isAdult = (age) => age >= 18;
const hRate = (age) => Math.round(206.9 - 0.67 * age);
console.log(processArr(birthYears, showAge));
console.log(processArr(processArr(birthYears, showAge), isAdult));
console.log(processArr(processArr(birthYears, showAge), hRate));
console.log(processArr(processArr([1950],showAge), (age) => age >= 65));

function showAges(e1) {
  return new Date().getFullYear() - e1;
}
let ages = processArr(birthYears, showAges);
let fullAge = processArr(ages, (item) => item >= 18);
let heartRate = processArr(ages, (item) => Math.round(206.9 - 0.67 * item));
//console.log(ages);
//console.log(fullAge);
//console.log(heartRate);
