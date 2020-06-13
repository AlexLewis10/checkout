const A_PRICE = 50
const A_OFFER_PRICE = 130
const A_OFFER_NUM = 3
// A & B Offer number indicates the number of A or B
// someone buys before it triggers an offer
const B_PRICE = 30
const B_OFFER_PRICE = 45
const B_OFFER_NUM = 2
const C_PRICE = 20
const D_PRICE = 15
const INCORRECT_INPUT = -1

function Shop () {
}

Shop.prototype.checkout = function (code) {
  if (this._isStringValid(code) === false) {
    return INCORRECT_INPUT
  }
  let codeArray = code.split('')

  let totalPrice = 0
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
      totalPrice += C_PRICE
    }
    if (code[i] === 'D') {
      totalPrice += D_PRICE
    }
  }
  totalPrice += (this._totalOfAs(numAs) + this._totalOfBs(numBs))
  return totalPrice
}

Shop.prototype._totalOfAs = function (numAs) {
  let totalAs = 0
  if (numAs % A_OFFER_NUM === 0) {
      totalAs += (A_OFFER_PRICE  * (numAs / A_OFFER_NUM))
    } else {
      let remainder = (numAs % A_OFFER_NUM)
      totalAs += (A_OFFER_PRICE  * ((numAs - remainder) / A_OFFER_NUM)) + (remainder * A_PRICE)
    }
  return totalAs
}

Shop.prototype._totalOfBs = function (numBs) {
  let totalBs = 0
  if (numBs % B_OFFER_NUM === 0) {
    totalBs += (B_OFFER_PRICE * (numBs / B_OFFER_NUM))
  } else { 
    totalBs += (B_OFFER_PRICE * ((numBs - 1) / B_OFFER_NUM)) + B_PRICE
  }
  return totalBs
}

Shop.prototype._isStringValid = function (code) {
  return (typeof code != 'string' || code != code.toUpperCase() ? false : true) 
}
