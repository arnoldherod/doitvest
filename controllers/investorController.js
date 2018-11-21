const Model = require('../models/index')
const Investor = Model.Investor
class investorController{
    static addInvestor(){
        return new Promise((resolve,reject)=>{
            Investor.create(obj)
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