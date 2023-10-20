const path = require("path");

const express = require('express');
const adminData = require('./admin')
const router = express.Router();

const rootDir = require('../utils/path')


router.get('/',(req, res, next)=> {
    console.log(adminData.products)
    res.render('shop',{pageTitle:'Shop'});
})




module.exports = router;