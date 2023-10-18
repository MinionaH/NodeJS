const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const errorRoutes = require('./routes/error.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));


app.use(adminData.routes);
app.use(shopRoutes);
app.use(errorRoutes); // Error Route should be the last one!


app.listen(3000);