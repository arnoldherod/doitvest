let routes = require('express').Router()
const riskController = require('../controllers/riskController')
const investorController = require('../controllers/investorController')

routes.get('/', function(req, res){
    res.send("Welcome Investor of DoItVest")
})
routes.get('/signUpInvestor',function(req,res){
    riskController.findRisk()
        .then((data) =>{
            let typename =data.map(types => types.type)
            res.render('signupInvestor.ejs',{data:typename})
        })
        .catch((err)=>{
            res.send(`error di baca data risk`)
        })  
})

routes.post('/signUpInvestor', function(req, res){
    investorController.addInvestor(req.body)
    .then(data => {
        res.send("masuk sini")
    })
    .catch(err => {
        res.send("error loh")
    })
})


module.exports = routes