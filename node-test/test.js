function first() {
    second();
    console.log(1);
    return;
  }
  
  function second() {
    console.log(2);
    return;
  }
  
  first();