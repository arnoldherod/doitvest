let routes = require('express').Router()

routes.get('/', function(req, res){
    res.send("Welcome Investor of DoItVest")
})
routes.get('/signupInvestor',function(req,res){
    res.render('signupInvestor.ejs')
})

module.exports = routes