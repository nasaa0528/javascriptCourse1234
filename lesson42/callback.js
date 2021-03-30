const cb = () => {
  console.log("greetings from Nasaa");
};

const fTest = (f) =>{
  f();
};

fTest(cb);

fTest(function (){
  console.log("Anonym greets here!");
});
