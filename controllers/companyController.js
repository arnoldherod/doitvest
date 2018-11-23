const Model = require('../models')
const Company = Model.Company



class companyController {

    static addCompany(input){
        return new Promise((resolve, reject) => {
            Company.create(
                {
                    name: input.name,
                    email: input.email,
                    borrowed: input.amount,
                    duration: input.duration,
                    password: input.psw
                }
            )
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static findOne(input){
        return new Promise((resolve, reject) => {
            Company.findByPk(input)
            .then(dataList =>{
                resolve(dataList)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static findEmail(param){
        return new Promise((resolve, reject) => {
            Company.findOne(param)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static updatePassword(obj,where){
        return new Promise((resolve,reject)=>{
            Company.update(obj,where)
            .then((data)=>{
                // console.log(data, '+==============================================')
                resolve(data)
            })
            .catch((err)=>{
                reject(err)
            })
        })
     }

    static deleteCompany(param){
        console.log(param, "++++++++++++++")
        return new Promise((resolve, reject) =>{
            Company.destroy(param)
            .then(() => {
                resolve(null)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }
    
}
module.exports = companyController