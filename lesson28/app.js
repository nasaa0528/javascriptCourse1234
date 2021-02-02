var lastname = "Amaraa";
console.log(window.lastname);
console.log(globalThis.lastname);
console.log(window);
console.log(isSecureContext);
window.alert("Global alert");
info();

function info() {
  var firstname = "Nasaa"; // Local var
  console.log(lastname + " is here");
  console.log(firstname);
  globalThis.alert("Local alert");
}
