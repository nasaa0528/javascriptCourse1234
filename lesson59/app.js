function showPost(content) {
  var editedContent = "Today's news: " + content + '\n\nTo show more, please visit to https://1234.mn';

  console.log(editedContent);

  return function() {
    var email = prompt(editedContent + "\n\nPlease subscribe to get update");
    document.write("Thank you!. We received your email." + email);
  }
}

var medee = "1234.mn site-iin medee duusahad 1 honog uldlee";

var askEmail = showPost(medee); // returns anonymous function
setTimeout(askEmail, 4000); // askEmail = anonym function, timeOut is getting variables that is sent from other function. It supposed to delete all the variables but it can accessto variable. This is closure.

// Closure: Gadnah function ni duussanii daraa ch gsn tuhain gadnah function--iinha vatiable utguudiig bugdiig ni haruulj chanda.

