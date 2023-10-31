const express = require('express')
const user = require('../controller/Cuser')
const router = express.Router()

// index를 렌더
router.get('/', user.index)


//회원가입 페이지를 렌더
router.get('/signup', user.signup)

// 회원가입 -> user table에 insert 실행시켜주는 api 필요(회원가입 버튼을 눌렀을 때)
router.post('/signup', user.post_signup)

// 로그인 페이지 랜더
router.get('/signin', user.signin)

// 회원가입 -> user table에 회원 존재 여부를 판단하는 api 필요(로그인 버튼을 눌렀을 때)
router.post('/signin', user.post_signin)

// 프로필 페이지 렌더(임시.일반 post 전송 왜냐?? 로그인을 유지시킬 수 있는 기술을 모르기 때문에)
router.post('/profile', user.profile)

// 회원정보 수정버튼 클릭시
router.patch('/profile/edit/:id', user.profile_edit)

// 회원 탈퇴 버튼 클릭시
router.delete('/profile/delete/:id', user.profile_delete)

module.exports = router
