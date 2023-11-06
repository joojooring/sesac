const express = require('express')
const user = require('../controller/Cuser')
const router = express.Router()

router.get('/', user.index)

router.get('/signup', user.signup)
router.post('/signup', user.post_signup)

router.get('/signin', user.signin)
router.post('/signin', user.post_signin)

router.get('/profile', user.profile)
router.patch('/profile/edit/:id', user.profile_edit)
router.delete('/profile/delete/:id', user.profile_delete)

router.delete('/logout', user.logout)

module.exports = router
