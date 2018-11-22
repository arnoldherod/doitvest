const routes = require('express').Router()
const companyController = require('../controllers/companyController')
const View = require('../views/view')

routes.get('/', function(req, res){
    res.send("Welcoming Companies to DoItVest")
})

routes.get('/signup', function(req,res){
    res.render("signUpCompanies.ejs")
})

routes.post('/signup', function(req,res){
    // res.send(req.body)
    companyController.addCompany(req.body)
    .then( data => {
        res.redirect("/")
    })
    .catch( err => {
        res.send(err)
    })
})

// routes.get()

module.exports = routes