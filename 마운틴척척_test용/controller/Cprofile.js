// 회원 수정/탈퇴 선택 페이지 관련
exports.selectProfilePage = (req, res) => {
    res.render("editProfile_select");
  };
  
  // 회원 수정 시 비밀번호 확인 페이지 관련
  exports.editCheckPage = (req, res) => {
    res.render("editProfile_editCheck");
  };
  
  // 회원 수정 페이지 관련
  exports.profilePage = (req, res) => {
    res.render("editProfile");
  };
  
  exports.profileEdit = (req, res) => {};
  
  // 회원 탈퇴 시 비밀번호 확인 페이지 관련
  exports.deleteCheckPage = (req, res) => {
    res.render("editProfile_delete");
  };
  
  exports.profileDelete = (req, res) => {};
  