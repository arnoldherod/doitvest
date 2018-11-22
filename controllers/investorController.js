const Model = require('../models/index')
const Investor = Model.Investor
const Company = Model.Company

class investorController{
    static addInvestor(input){
        return new Promise((resolve,reject)=>{
            Investor.create(
            {
                name: input.name,
                email: input.email,
                invest: input.invest,
                riskId: input.risk,
                password: input.psw
            })
            .then((data)=> {
                resolve(data)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }

    static allCompanies(){
        return new Promise((resolve, reject) => {
            Company.findAll()
            .then(dataList => {
                resolve(dataList)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

}

module.exports = investorController