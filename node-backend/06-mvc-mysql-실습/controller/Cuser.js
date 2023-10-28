const Muser = require("../model/Muser")

exports.home = (req,res) =>{
    res.render("index");
}

exports.register = (req,res)=>{
Muser.getRegister((result)=>{
    res.render("user", {data : result})
})
};

