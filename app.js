const express = require('express')
let app = express()
const homeRoute = require('./routes')
const companyRoute = require('./routes/companies')
const investorRoute = require('./routes/investors')
const session = require('express-session')
const format$ = require('./helpers/moneyFormat')

let bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.set("view engine", "ejs")

app.use(session({secret: "doitvest"}))

app.use(function(req, res, next){
    res.locals.session = req.session
    res.locals.format$ = format$
    next();
});

app.use('/', homeRoute)
app.use('/companies', companyRoute)
app.use('/investors', investorRoute)

app.listen(5000,function(){
    console.log(`we're running on port 5000`)
})