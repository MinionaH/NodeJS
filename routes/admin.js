const express = require('express');

const router = express.Router();


router.get('/addproduct',(req, res, next)=> {

    console.log("in the middleware!")
    res.send('<form action="/product" method = "POST"><input type="text" name="title"><button type="submit">Add product</button></input></form>');
})


router.post('/product',(req,res,next) => {

    console.log(req.body)
    res.redirect('/')

});


module.exports = router;