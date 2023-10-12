const router = require('express').Router()


router.get('/login', async (req, res, next) => {
    res.render('./auth/page/login.ejs', { layout: './auth/main.ejs' })
})
router.get('/forget_password', async (req, res, next) => {
    res.render('./auth/page/forget_password.ejs', { layout: './auth/main.ejs' })
})
router.get('/reset_password', async (req, res, next) => {
    res.render('./auth/page/reset_password.ejs', { layout: './auth/main.ejs' })
})






router.get('/404', async (req, res, next) => {
    res.render('./auth/page/404.ejs', { layout: './auth/main.ejs' })
})
module.exports = router