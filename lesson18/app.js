var programmingLanguages = ["JavScript", "PHP", "C#", "Python"];
// Print Array
console.log(programmingLanguages);
// SHIFT = get first element
var first = programmingLanguages.shift();
console.log("first: " + first);
console.log(programmingLanguages);

// UNSHIFT = Add value in the first index
programmingLanguages.unshift("Javascript");
console.log(programmingLanguages);

// PUSH = add to last
programmingLanguages.push("C++");
console.log(programmingLanguages);

// POP = get last element
var last = programmingLanguages.pop();
console.log("last: " + last);
console.log(programmingLanguages);

// get length
console.log(programmingLanguages.length);

// Add by length
programmingLanguages[programmingLanguages.length] = "Java";
console.log(programmingLanguages);

// Get index of Java
console.log(programmingLanguages.indexOf("Java"));
console.log(programmingLanguages.indexOf("java"));
