let routes = require('express').Router()
const riskController = require('../controllers/riskController')


routes.get('/', function(req, res){
    res.send("Welcome Investor of DoItVest")
})
routes.get('/signupInvestor',function(req,res){
    riskController.findRisk()
        .then((data) =>{
            let typename =data.map(types => types.type)
            res.send(typename)
            // res.render('signupInvestor.ejs',{data:typename})
        })
        .catch((err)=>{
            res.send(`error di baca data risk`)
        })  
})


module.exports = routes