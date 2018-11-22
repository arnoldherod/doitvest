const express = require('express')
let app = express()
const homeRoute = require('./routes')
const companyRoute = require('./routes/companies')
const investorRoute = require('./routes/investors')

let bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.set("view engine", "ejs")

app.use('/', homeRoute)
app.use('/companies', companyRoute)
app.use('/investors', investorRoute)

app.listen(5000,function(){
    console.log(`we're running on port 5000`)
})