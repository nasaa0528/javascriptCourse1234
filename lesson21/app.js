let command = "";
while (command !== "quit") {
  command = prompt("Enter command");
  alert("Your command: " + command);
}

do {
  command = prompt("Enter second command: ");
  alert(command);
} while (command !== "end");
