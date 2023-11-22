const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {

    res.render('add-product', {
        pageTitle: 'Add product',
        path: '/add_product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/add-product');

};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop', {
            pageTitle: 'Shop',
            prods: products,
            path: '/',
            hasProducts: products.length > 0
        });

    });
};