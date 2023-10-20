const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require('../utils/path')


router.use((req,res,next) => {
    res.status(404).render('404',{pageTitle: 'Page Not Found'})
});

module.exports = router;