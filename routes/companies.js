const routes = require('express').Router()
const companyController = require('../controllers/companyController')
const View = require('../views/view')
const {checkPassword} = require('../helpers/hashPassword')

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

routes.get('/signin', function(req,res){
    let eInfo = req.query.eInfo
    // res.send(eInfo)
    res.render("signinCompany.ejs", {noEmail: eInfo})
})

routes.post('/signin', function(req,res){
    companyController.findOne({where: {email: req.body.email}})
    .then(data => {
        if(!data){
            let noEmail = "No Email Found"
            res.redirect(`/companies/signin?eInfo=${noEmail}`)
        }
        else if(data){
            if(checkPassword(req.body.psw, data.password)){
                req.session.Company ={
                    data
                }
                let success = "Sucessfully signed in"
                res.redirect(`/companies/signin?sInfo=${success}`)

            }
        }
    })
    .catch(err => {
        res.send(err)
    })
})


module.exports = routes