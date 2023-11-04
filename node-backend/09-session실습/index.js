const express = require('express')
const session = require('express-session')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')

app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
  })
)

app.get('/', (req, res) => {
    console.log(req.session.user);
    // 현재 세션에 저장된 사용자 정보를 확인하기 위해

  const user = req.session.user

  if (user) {
    res.render('index', { isLogin: true, user: user })
  } else {
    res.render('index', { isLogin: false })
    console.log(req.session.user);

  }
})

app.get('/login', (req, res) => {
  req.session.user = 'lily'
  res.send(
    `<script>
        alert('로그인 성공');
        location.href='/';
    </script>`
  )
})

app.get('/logout', (req, res) => {
  req.session.destroy(function (err) {
    res.send(
      `<script>
            alert('로그아웃 성공');
            location.href='/';
        </script>`
    )
  })
})

app.listen(PORT, () => {
  console.log('Server Open: ', PORT)
})
