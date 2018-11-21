const Model = require('../models/index')
const Investor = Model.Investor
class investorController{
    static addInvestor(input){
        return new Promise((resolve,reject)=>{
            Investor.create(
            {
                name: input.name,
                email: input.email,
                invest: input.invest,
                risk: input.risk,
                password: input.psw//NEED TO THE INPUT.PASSWORD
            })
            .then((data)=> {
                resolve(data)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }


}

module.exports = investorController