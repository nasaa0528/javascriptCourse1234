// First Class functions
function interview(job){
  if(job === "programmer"){
    return function(name) {
      console.log(name + ", ta PROTOTYPE gej yu bolohiig medeh uu?");
    }
  } else if( job === "teacher" ){
    return function(name) {
      console.log(name + ", ta heddugeer angid hicheel orj chadah ve?");
    }
  } else if(job === "driver"){
    return function(name) {
      console.log(name + ", ta motorcycle barij chadah uu?");
    }
  }
}

var programmerQuestion = interview("programmer");
programmerQuestion("boldoo");
let teacher = interview("teacher");
teacher("Eska");

interview("teacher")("Naraa");
interview("driver")("Amraa");
