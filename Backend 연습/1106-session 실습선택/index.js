const express = require('express')
const session = require('express-session')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.use('/static', express.static(__dirname + '/static'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
  })
)

const router = require('./routes')
app.use('/', router)

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.get('*', (req, res) => {
  res.send('접근할 수 없는 주소입니다.')
})

app.listen(PORT, () => {
  console.log('Server Port : ', PORT)
})
