function format$(amount){
    return `Rp. ${new Intl.NumberFormat(['id'], {maximumSignificantDigist: 3}).format(amount)}`
}

module.exports = format$