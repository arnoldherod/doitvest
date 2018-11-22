let routes = require('express').Router()

routes.get('/', function(req, res){
    res.render("homepage.ejs")
})

module.exports = routes