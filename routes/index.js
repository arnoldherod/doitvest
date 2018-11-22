let routes = require('express').Router()

routes.get('/', function(req, res){
    res.render("homepage.ejs")
})

routes.post('/', function(req,res){
    res.redirect('/')
})

module.exports = routes