let routes = require('express').Router()
const riskController = require('../controllers/riskController')
const investorController = require('../controllers/investorController')

routes.get('/', function(req, res){
    res.send("Welcome Investor of DoItVest")
})
routes.get('/signupinvestor',function(req,res){
    riskController.findRisk()
        .then((data) =>{
            let typeName =data.map(types => types)
            // res.send(typeName)
            res.render('signupInvestor.ejs',{data:typeName})
        })
        .catch((err)=>{
            res.send(`error di baca data risk`)
        })  
})

routes.post('/signupinvestor', function(req, res){
    investorController.addInvestor(req.body)
    .then(data => {
        res.redirect("/")
    })
    .catch(err => {
        res.send("error loh")
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

module.exports = routes