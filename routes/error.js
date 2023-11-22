const express = require("express");
const path = require("path");
const router = express.Router();
const errorPage = require('../controllers/error');

router.use(errorPage.errorPage);

module.exports = router;