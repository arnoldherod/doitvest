const Model = require('../models/index')
const Risk = Model.Risk
const View = require('../views/view')
class riskControllers{
    static findRisk(){
    return new Promise((resolve,reject)=>{
        Risk.findAll()
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=>{
           reject(err)
        })

    })
 }

}
module.exports = riskControllers