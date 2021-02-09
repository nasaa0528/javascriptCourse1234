const fa = () => {
  let a = 1;
  const fb = () => {
    let b = 20;
    const fc = () => {
      let c = 7;
      console.log(a + b + c);
    };
    fc();
  };
  fb();
};
fa();
