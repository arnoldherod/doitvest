let routes = require('express').Router()
const riskController = require('../controllers/riskController')
const investorController = require('../controllers/investorController')
const companyController = require('../controllers/companyController')
const Models = require('../models/')
const Risk = Models.Risk
const {checkPassword, getPassword} = require('../helpers/hashPassword')
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:
    {
        user: `gamecowo12345@gmail.com`,
        pass:`gamecowo54321`
    }
})

var mailOptions = {
    from: 'gamecowo12345@gmail.com',
    to: 'arnold.herod@yahoo.co.id',
    subject: 'Confirmation Email from DoItVest',
    text: 'Congratulations! An Investor has found your proposal appealing, This email confirmed our partnership!'
}


routes.get('/', function(req, res){
    res.send("Welcome Investor of DoItVest")
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

routes.post('/signupinvestor', function(req,res){
    // res.send(req.body)
    investorController.addInvestor(req.body)
    .then( data => {
        res.redirect("/")
    })
    .catch( err => {
        res.send(err)
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
    investorController.findInvestor({where: {email: req.body.email}}, {include: Risk})
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

routes.get('/approve', function(req, res){
    // res.send(req.query.cId)
    companyController.findOne(req.query.cId)
    .then( data => {
        // res.send(data)
        res.render("formApproved.ejs", {company: data, amount: data.borrowed})
    })
    .catch( err => {
        res.send(err)
    })
})

routes.post('/approve', function(req,res){
    let invested = req.body.invested
    let cId = req.query.cId
    let iId = req.session.Investor.data.id
    investorController.addConj(iId, invested, cId)
    .then(data => {
        return companyController.findOne(cId)
        .then(company => {
            let email = company.email
            mailOptions.to = email 
            transporter.sendMail(mailOptions, function(err, info){
                if(err){
                    res.send(err)
                }
                else{
                    let obj = `Confirmation Email Sent`
                    res.redirect(`/?sInfo=${obj}`)
                }
            })

        })
    })
    .catch(err => {
        res.send("ERROR COI!!!!!!!! GRRAAAA")
    })
})

routes.get('/edit/:id',function (req,res){
    res.render('edit.ejs')
})

routes.post('/edit/:id',(req,res)=>{
    let obj = req.body
    if(obj.name === "" || obj.name=== undefined){
        res.send('please input your name')
    }else if(obj.email === "" || obj.email === undefined){
        res.send('please input your email')
    }else if(obj.psw === "" || obj.psw === undefined){
        res.send('plase input your password')
    }else if(checkPassword(req.body.psw, req.session.Investor.data.password)=== false){
        res.send(`your password is incorrect`)
    }else{
        let data = {
          password: getPassword(obj.newpsw)
        }
        // res.send(data)
        investorController.updatePassword(data,{where:{
            id: req.params.id
        }})
        .then((data) => {
            // res.send(data)
            res.redirect('/investors/profile')
        })
        .catch((err)=>{
            res.send(`error di updated investor`)
        })
    }
})

routes.get('/delete',((req,res) =>{
        companyController.deleteCompany({where:{
            id: req.query.cId
        }})
        .then(() =>{
            res.redirect('/investors/profile')
        })
    })
)


module.exports = routes