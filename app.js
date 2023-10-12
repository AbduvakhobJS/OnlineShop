const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const i18n = require("i18n-express");
const session = require('express-session')
const cookieParser = require('cookie-parser')
const expresslayoutsejs = require('express-ejs-layouts')
const Database = require('./Database/userDatebase')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({ origin: "*" }))
app.use(expresslayoutsejs)
app.use(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(cookieParser())
app.use(session({
    secret: '323425y5yywv45yb44cyhw4',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 100,
        sameSite: "strict",
        httpOnly: true
    }
}))
app.use(i18n({
    translationsPath: path.join(__dirname, 'i18n'),
    siteLangs: ["uz", "ru", "en"],
    textsVarName: 'LANG'
}));

Database.DatabaseConnection()






app.use(require('./views/admin/router')) // admin
app.use(require('./views/auth/router')) // auth
app.use(require('./views/client/router')) // client


app.use('/user', require('./router/userRouter'))
app.use('/brand', require('./router/brandRouter'))
app.use('/comment', require('./router/commentRouter'))
app.use('/reply', require('./router/replyRouter'))
app.use('/news', require('./router/newsRouter'))
app.use('/product', require('./router/productRouter'))
app.use('/rating', require('./router/ratingRouter'))
app.use('/category', require('./router/categoryRouter'))
app.use('/subscription', require('./router/subscriptionRouter'))
app.use('/contact', require('./router/contactRouter'))
app.use('/cart', require('./router/cartRouter'))



// app.get('*', async (req, res, next) => res.redirect("/404"))

app.listen(5000, () => {
    console.log("Server is on");
})