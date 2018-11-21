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
                    password: input.psw//NEED TO THE INPUT.PASSWORD
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
}
module.exports = companyController