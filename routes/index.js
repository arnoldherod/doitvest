let routes = require('express').Router()

routes.get('/', function(req, res){
    if(req.query.signout === "y"){
        delete req.session.Company
        delete req.session.Investor
    }
    res.render("homepage.ejs")
})

routes.post('/', function(req,res){
    res.redirect('/')
})

module.exports = routes