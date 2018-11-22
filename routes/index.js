let routes = require('express').Router()

routes.get('/', function(req, res){
    let sInfo = req.query.sInfo
    
    if(req.query.signout === "y"){
        delete req.session.Company
        delete req.session.Investor
    }

    res.render("homepage.ejs", {success: sInfo})
})

routes.post('/', function(req,res){
    res.redirect('/')
})

module.exports = routes