function mendchileh() {
  let friend = "Сараа";
  console.log("Сайн уу " + friend);
  ajilTurulAsuuh();
  function ajilTurulAsuuh() {
    let job = "Web designer";
    console.log(friend + ", Ажил дажгүй юу?");
    console.log(job + " ажлыг сонирхож байна уу?");
    askParents();
    function askParents() {
      console.log(friend + " аав, ээж нь сайн уу?");
    }
  }
}
mendchileh();
