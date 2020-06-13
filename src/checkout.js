function Shop () {
}
const A_PRICE = 50
const A_OFFER_PRICE = 130
const B_PRICE = 30
const B_OFFER_PRICE = 45
const C_PRICE = 20
const D_PRICE = 15

Shop.prototype.checkout = function (code) {
  if (this.isStringValid(code) === false) {
    return -1
  }
  let codeArray = code.split('')

  let total = 0
  let numAs = 0
  let numBs = 0
  for (let i = 0; i < codeArray.length; i++) {
    if (code[i] === 'A') {
      numAs ++
    }
    if (code[i] === 'B') {
      numBs ++
    }
    if (code[i] === 'C') {
      total += C_PRICE
    }
    if (code[i] === 'D') {
      total += D_PRICE
    }
  }
  total += this.totalAs(numAs)
  total += this.totalBs(numBs)
  return total
}

Shop.prototype.totalAs = function (numAs) {
  let totalAs = 0
  if (numAs % 3 === 0) {
      totalAs += (A_OFFER_PRICE  * (numAs / 3))
    } else {
    let remainder = (numAs % 3)
    totalAs += (A_OFFER_PRICE  * ((numAs - remainder) / 3)) + (remainder * A_PRICE)
    }
  return totalAs
}



Shop.prototype.totalBs = function (numBs) {
  let totalBs = 0
  // if (numBs > 2 && numBs % 2 != 0) {
  //   totalBs += (B_OFFER_PRICE * ((numBs - 1) / 2)) + B_PRICE} 
    if (numBs % 2 === 0) {
    totalBs += (B_OFFER_PRICE * (numBs / 2))
  } else { 
    // totalBs += B_PRICE
    totalBs += (B_OFFER_PRICE * ((numBs - 1) / 2)) + B_PRICE
  }
  return totalBs
}

Shop.prototype.isStringValid = function (code) {
  if (typeof code != 'string') {
      return false
    }
  if (code != code.toUpperCase()) {
      return false
  }
  return true
}
