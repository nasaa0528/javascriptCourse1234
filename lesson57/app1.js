const firstOrderFunction = (job) => {
  if(job === "programmer"){
    return (name) => console.log(name + ", ta PROTOTYPE medeh uu?");
  } else if(job === "teacher"){
    return (name) => console.log(name + ", ta heddugeer angid hicheel orj chadah ve?");
  } else if(job === "driver"){
    return (name) => console.log(name + ", ta motorcycle barij chadah uu?");
  }
}

/*firstOrderFunction("programmer")("nasaa");
firstOrderFunction("teacher")("anu");
firstOrderFunction("driver")("Mr B");*/

const pf = firstOrderFunction("programmer");
const tf = firstOrderFunction("teacher");
const df = firstOrderFunction("driver");

pf("nasaa");
tf("anu");
df("Mr. D");
