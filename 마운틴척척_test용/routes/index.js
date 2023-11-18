const express = require("express");
const mainRouter = express.Router();
const userRouter = express.Router();
const galleryRouter = express.Router();

// 메인페이지 관련
const main = require("../controller/Cmain");
mainRouter.get("/", main.mainPage);

// 로그인 관련
const signin = require("../controller/Csignin");
userRouter.get("/signin", signin.loginPage);
userRouter.post("/signin", signin.postLogin);

// // 로그아웃 관련
// const logout = require("../controller/Cmain");
// mainRouter.post("/logout", main.logOut);

// 회원가입 관련
const signup = require("../controller/Csignup");
userRouter.get("/signup", signup.signUpPage);
userRouter.post("/signupcheck", signup.postSignUpCheck);
userRouter.post("/signup", signup.postSignUp);

// 마이페이지(회원정보 수정/탈퇴) 관련
const profile = require("../controller/Cprofile");
userRouter.get("/profile", profile.selectProfilePage);
userRouter.get("/profile/editcheck", profile.editCheckPage);
userRouter.post("/profile/editcheck", profile.editCheckPw);
userRouter.get("/profile/edit", profile.profilePage);
userRouter.patch("/profile/edit/:u_id", profile.profileEdit);
userRouter.patch("/profile/editall/:u_id", profile.profileAllEdit);
userRouter.get("/profile/delete", profile.deleteCheckPage);
userRouter.post("/profile/delete", profile.userDelete);

// 지도관련
const map = require("../controller/Cmap");
galleryRouter.get("/map", map.mapUiPage);
galleryRouter.get("/maptest", map.mapPage);
galleryRouter.get("/mapexhibition", map.getMap);


// 찜하기 관련
galleryRouter.post("/heartgallery", map.heartGallery);


// 카테고리 관련
const category = require("../controller/Clist");
galleryRouter.get("/category", category.categoryAllPage);
galleryRouter.get("/category/exhibition", category.categoryExhibition);
galleryRouter.get("/category/artgallery", category.categoryArtgallery);
galleryRouter.get("/category/museum", category.categoryMuseum);
galleryRouter.get("/category/popupstore", category.categoryPopup);


module.exports = {
  mainRouter,
  userRouter,
  galleryRouter,
};
