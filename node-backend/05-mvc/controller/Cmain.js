const {commentInfos} = require("../model/Comment");


// function(req,res){
//     res.render("ejs")
//     }
//방법1
exports.main = (req,res) => {
    res.render("index");

}
// 방법2
// module.exports ={}

exports.comments = (req,res)=>{
    // 방명록에 데이터베이스가 필요하고 그건 model폴더에 있음
    
    const commentData = commentInfos();

    
    // return [{
    //     id: 1, 
    //     userid:"lily", 
    //     date : "2023-10-26", 
    //     comment:"방가방가"
    //     },
    //     {id: 2, 
    //     userid:"joojoobab", 
    //     date : "2023-10-28", 
    //     comment:"하이루"
    //     },]

    res.render("comments",{
        commentInfos : commentData,
    });
}