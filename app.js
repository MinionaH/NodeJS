const express = require('express')

const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin.js')

app.use(bodyParser.urlencoded());



app.use('/',(req, res, next)=> {

    console.log("in the middleware!")
    res.send('<h1>Hello from express!</h1>');
})

app.listen(3000);