const express = require('express');

const path = require("path");

const router = express.Router();

const rootDir = require('../utils/path')

router.get('/add-product',(req, res, next)=> {

    res.sendFile(path.join(rootDir, 'views','add-product.html'));
    console.log("before button")
})


router.post('/add-product',(req,res,next) => {
    console.log("After")
    console.log(req.body)
    res.redirect('/')

});


module.exports = router;