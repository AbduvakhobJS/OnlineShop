const router = require('express').Router()


router.get('/', async (req, res, next) => {
    res.render('./client/pages/index.ejs', { layout: './client/main.ejs', url: "" })
})


module.exports = router