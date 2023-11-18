const {User} = require("../model/index")
exports.mainPage = (req, res) => {
  console.log("user_id: ",req.session.user);
  res.render("main", {user: req.session.user});
};

// logout 추가
exports.logOut = (req, res) => {
  if(req.session.user) {
    req.session.destroy(function(err) {

      res.send({result: true})
    })
  } else {
    res.send({result: false})
  }
}