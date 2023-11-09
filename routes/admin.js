const express = require('express');

const path = require("path");

const router = express.Router();

const rootDir = require('../utils/path')

const products = [];

router.get('/add-product',(req, res, next)=> {

    res.render('add-product', {pageTitle:'Add product', path: '/add_product'});
})


router.post('/add-product',(req,res,next) => {
    products.push({title: req.body.title})
    res.redirect('/add-product')

});


exports.routes = router;
exports.products = products;