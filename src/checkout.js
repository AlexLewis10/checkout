function Shop () {
}

Shop.prototype.checkout = function (code) {
  let codeArray = code.split('')
  let total = 0
  for (let i = 0; i < codeArray.length; i++) {
    if (code[i] === 'A') {
      total += 50
    }
    if (code === 'B') {
      total += 30
    }
    if (code === 'C') {
      total += 20
    }
    if (code === 'D') {
      total += 15
    }
  }
  return total
}