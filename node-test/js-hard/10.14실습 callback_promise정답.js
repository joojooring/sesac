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
  
  call("kim")
    .then(function (result) {
      console.log(result, "반가워");
      return back();
    })
    .then((result) => {
      console.log(result, "을 실행했구나");
      return hell();
    })
    .then((result) => {
      console.log("여기는", result);
    });