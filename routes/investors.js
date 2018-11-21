let routes = require('express').Router()

routes.get('/', function(req, res){
    res.send("Welcome to DoItVest")
})

module.exports = routes