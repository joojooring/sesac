// const { VIRTUAL } = require("sequelize");
const { Login } = require("../model");


exports.home = (req,res) => {
    res.render("user")
}

// router.get("/signup", controller.signup); 회원가입시 html렌더
exports.signup= (req,res) => {
    Login.findAll()
    .then((result)=>{
        res.render("signup", {data : result}) // 페이지 뒤에 붙는 데이터는 페이지에서 사용할 데이터를 같이 보내고 싶을 때 사용
    })
}


// router.post("/signup", controller.postSignup); 회원가입 user insert
exports.postSignup= (req,res) => {
    const data = {
        userid: req.body.userid,
        pw :req.body.pw,
        name :req.body.name
    }

    Login.create(data).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.status(500).send("오류발생")
    })
}


exports.getLogin = (req,res) =>{
   res.render("login")

}

// router.post("/login" , controller.login);
exports.postLogin= (req,res) => {
    Login.findOne({
            
        where : {
            userid : req.body.userid,
            pw : req.body.pw,
        }
    }).then((result)=> {
        console.log(result)
        if(result) res.send({ result: true, id: result.id});
        else  res.send({ result: false });
  
    })
}

exports.getProfile = (req,res) =>{
    Login.findOne()
    .then((result)=>{
        res.render("profile", {data : result})

    })

 
 }
 


// router.post("/profile", controller.profile); user 조회
exports.postProfile= (req,res) => {
    Login.findOne({
        where : {
            id : req.body.id
        }
    }).then((result)=> {
        res.render("profile", {data : result})
    })

}

// router.patch("/profile/edit/:id", controller.patchEdit); user 정보 수정
exports.patchEdit= (req,res) => {
    const data = {
        userid: req.params.userid,
        name :req.params.name,
        pw :req.params.pw
    }
    Login.update(data,
        {where : {
            id : req.params.id
        }
    }).then((result)=>{
        res.send({result : true})
    })
};

// router.delete("/profile/delete/:id", controller.profileDelete); user 탈퇴
exports.profileDelete= (req,res) => {
    
    Login.destroy({
        where : {
            id :req.params.id
        }
    }).then((result)=>{
        res.send({result : true})
    })
}
