let routes = require('express').Router()
const riskController = require('../controllers/riskController')
const investorController = require('../controllers/investorController')
const {checkPassword} = require('../helpers/hashPassword')


routes.get('/', function(req, res){
    let sInfo = req.query.sInfo

    res.send("Welcome Investor of DoItVest",{success: sInfo})
})
routes.get('/signupinvestor',function(req,res){
    let eInfo = req.query.eInfo

    riskController.findRisk()
        .then((data) =>{
            let typeName =data.map(types => types)
            // res.send(typeName)
            res.render('signupInvestor.ejs',{data:typeName, noEmail:eInfo})
        })
        .catch((err)=>{
            res.send(`error di baca data risk`)
        })  
})


routes.get('/profile', function(req,res){
    investorController.allCompanies()
    .then(data => {
        // res.send(data)
        res.render('listCompanies.ejs', {allCompanies: data})
    })
    .catch(err => {
        res.send(err)
    })
})

routes.post('/signin', function(req,res){
    investorController.findInvestor({where: {email: req.body.email}})
    .then(data => {
        if(!data){
            let noEmail = "No Email Found"
            res.redirect(`/investors/signupinvestor?eInfo=${noEmail}`)
        }
        else if(data){
            if(checkPassword(req.body.psw, data.password)){
                req.session.Investor = {
                    data
                }
                // res.send(req.session)
                let success = "Sucessfully signed in"
                res.redirect(`/?sInfo=${success}`)
            }
            else{
                let passErr = "Incorrect Password"
                res.redirect(`/investors/signupinvestor?eInfo=${passErr}`)
            }
        }
    })
    .catch(err => {
        res.send(err)
    })
})


module.exports = routes