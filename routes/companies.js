const routes = require('express').Router()
const companyController = require('../controllers/companyController')
const View = require('../views/view')
const {checkPassword, getPassword} = require('../helpers/hashPassword')

routes.get('/', function(req, res){
    let sInfo = req.query.sInfo
    res.send("Welcoming Companies to DoItVest", {success: sInfo})
})

routes.get('/signup', function(req,res){
    let eInfo = req.query.eInfo
    res.render("signUpCompanies.ejs", {noEmail: eInfo})
})


routes.post('/signup', function(req,res){
    companyController.addCompany(req.body)
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


routes.post('/signin', function(req,res){
    companyController.findEmail({where: {email: req.body.email}})
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

routes.get('/edit/:id',function (req,res){
    res.render('editCompany.ejs')
})

routes.post('/edit/:id',(req,res)=>{
    let obj = req.body
    if(obj.name === "" || obj.name=== undefined){
        res.send('please input you name')
    }else if(obj.email === "" || obj.email === undefined){
        res.send('please input your email')
    }else if(obj.psw === "" || obj.psw === undefined){
        res.send('plase input your password')
    }else if(checkPassword(req.body.psw, req.session.Company.data.password)=== false){
        res.send(`your password is incorrect`)
    }else{
        let data = {
          password: getPassword(obj.newpsw)
        
        }
        companyController.updatePassword(data,{where:{
            id:req.params.id
        }})
        .then((data) => {
            res.redirect('/companies/approve')
        })
        .catch((err)=>{
            res.send(`error di updated company`)
        })
    }
})

routes.get('/approve', (req, res)=> {
    res.render("listInvestors.ejs")
})

module.exports = routes