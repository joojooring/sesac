function call(name) {
    return new Promise(function (resovle, reject) {
      setTimeout(function () {
        console.log(name);
        resovle(name);
      }, 1000);
    });
  }
  
  function back() {
    return new Promise(function (resovle, reject) {
      setTimeout(function () {
        console.log("back");
        resovle("back");
      }, 1000);
    });
  }
  
  function hell() {
    return new Promise(function (resovle, reject) {
      setTimeout(function () {
        resovle("callback hell");
      }, 1000);
    });
  }
  
  async function exec() {
    const res1 = await call("kim");
    console.log(res1, "반가워");
    const res2 = await back();
    console.log(res2, "을 실행했구나");
    const res3 = await hell();
    console.log("여기는", res3);
  }
  
  exec();