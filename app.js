const express = require('express')

const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const errorRoutes = require('./routes/error.js');

app.use(bodyParser.urlencoded({extended: false}));


app.use(adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);


app.listen(3000);