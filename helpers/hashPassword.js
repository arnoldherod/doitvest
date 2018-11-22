const bcrypt = require('bcryptjs')
let salt = bcrypt.genSaltSync(10)

function getPassword(input){
        let hashpass = bcrypt.hashSync(input,salt)
        return hashpass
    }
function checkPassword(input, pass){
        let check = bcrypt.compareSync(input,pass)
        return check
    }

module.exports = {getPassword, checkPassword}