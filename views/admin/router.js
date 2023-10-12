const express = require('express')
const router = express.Router()

router.get('/admin/dashboard', async (req, res, next) => {
    res.render('./admin/pages/index.ejs', { layout: './admin/main.ejs', url: "/admin/dashboard" })
})
router.get('/admin/category', async (req, res, next) => {
    res.render('./admin/pages/category.ejs', { layout: './admin/main.ejs', url: "" })
})
router.get('/admin/brand', async (req, res, next) => {
    res.render('./admin/pages/brand.ejs', { layout: './admin/main.ejs', url: "" })
})
router.get('/admin/contact', async (req, res, next) => {
    res.render('./admin/pages/contact.ejs', { layout: './admin/main.ejs', url: "" })
})
router.get('/admin/product', async (req, res, next) => {
    res.render('./admin/pages/product.ejs', { layout: './admin/main.ejs', url: "" })
})
router.get('/admin/subscription', async (req, res, next) => {
    res.render('./admin/pages/subscription.ejs', { layout: './admin/main.ejs', url: "" })
})
router.get('/admin/user', async (req, res, next) => {
    res.render('./admin/pages/user.ejs', { layout: './admin/main.ejs', url: "" })
})
router.get('/admin/news', async (req, res, next) => {
    res.render('./admin/pages/news.ejs', { layout: './admin/main.ejs', url: "" })
})

module.exports = router