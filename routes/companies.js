const routes = require('express').Router()
const companyController = require('../controllers/companyController')
const View = require('../views/view')
const {checkPassword} = require('../helpers/hashPassword')

routes.get('/', function(req, res){
    let sInfo = req.query.sInfo
    res.send("Welcoming Companies to DoItVest", {success: sInfo})
})

routes.get('/signup', function(req,res){
    let eInfo = req.query.eInfo
    res.render("signUpCompanies.ejs", {noEmail: eInfo})
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

routes.post('/signin', function(req,res){
    companyController.findOne({where: {email: req.body.email}})
    .then(data => {
        if(!data){
            let noEmail = "No Email Found"
            res.redirect(`/companies/signup?eInfo=${noEmail}`)
        }
        else if(data){
            if(checkPassword(req.body.psw, data.password)){
                req.session.Company = {
                    data
                }
                // res.send(req.session)
                let success = "Sucessfully signed in"
                res.redirect(`/?sInfo=${success}`)
            }
            else{
                let passErr = "Incorrect Password"
                res.redirect(`/companies/signup?eInfo=${passErr}`)
            }
        }
    })
    .catch(err => {
        res.send(err)
    })
})


module.exports = routes