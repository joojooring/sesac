const express = require('express')
const app = express()
const PORT = 8000
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); // 이 코드가 쿠키를 해석하고 사용할 수 있게 해줌


app.get("/", (req,res)=>{
    const closePopup = req.cookies.popup;
    res.render("popup", {closePopup : closePopup})
})
// req.cookies.popup 값을 closePopup 변수에 할당합니다.
// req.cookies는 요청에 포함된 쿠키를 나타내는 객체입니다.
// popup은 쿠키의 이름이며, 해당 이름으로 저장된 쿠키의 값을 가져옵니다.
// 가져온 값은 closePopup 변수에 할당됩니다.
// popup 템플릿을 렌더링합니다.
// res.render("popup", { closePopup: closePopup }) 코드를 사용하여 popup 템플릿을 렌더링합니다.
// { closePopup: closePopup }는 템플릿에 전달되는 데이터입니다.
// closePopup 변수의 값을 popup 템플릿에서 사용할 수 있도록 전달됩니다.
// 이 코드의 목적은 다음과 같습니다:

// 클라이언트에서 서버로 GET 요청이 오면, 서버는 쿠키에서 popup 값을 가져와서 closePopup 변수에 저장합니다.
// 팝업창을 끄는 변수선언
// 그 후, 서버는 popup 템플릿을 렌더링하고, closePopup 값을 템플릿에 전달합니다.
// 팝업창을 끄는 그 값을 render할 템플릿에 전달
// 이를 통해 popup 템플릿에서는 closePopup 값에 따라 팝업 창을 제어할 수 있습니다.
// 예를 들어, closePopup 값이 true이면 팝업 창을 표시하지 않고, false이면 팝업 창을 표시할 수 있습니다.
// 따라서, 위의 코드는 클라이언트의 쿠키에 따라 팝업 창을 제어하는 기능을 구현한 것입니다.


const cookieConfig = {
    httpOnly : true , //쿠키는 브라우저에서 생성이 되는데 기본적으로 브라우저에서 접근이 가능함 
    // -> document.cookie 로 접근하지 못하게 하려면 httpOnly를 true로!! 즉 서버에서만 쿠키에 접근할 수 있다!
    maxAge : 24 * 60 * 60 * 1000, //ms단위로 보존하고자 하는 기간을 설정 (3초 : 3000 , 30초 : 30000)
}; 

app.post("/setCookie",(req,res)=>{
    // 서버가 쿠키를 만들어서 응답으로 보냄

    res.cookie("popup", "yes", cookieConfig) //쿠키를 보내는 메소드가 아님!! 쿠키를 담는 메소드임
    res.send({result : true}); //그래서 res.send를 꼭 보내야 응답이 보내져서 쿠기가 보내짐
})

app.listen(PORT, () => {
  console.log('Server Port : ', PORT)
})
