function Shop () {
}

Shop.prototype.checkout = function (code) {
  let codeArray = code.split('')
  let total = 0
  let numAs = 0
  let numBs = 0
  for (let i = 0; i < codeArray.length; i++) {
    if (code[i] === 'A') {
      numAs += 1
    }
    if (code[i] === 'B') {
      numBs += 1
    }
    if (code[i] === 'C') {
      total += 20
    }
    if (code[i] === 'D') {
      total += 15
    }
  }
  total += this.totalAs(numAs)
  total += this.totalBs(numBs)
  return total
}

Shop.prototype.totalAs = function (numAs) {
  let totalAs = 0
  if (numAs > 3 && numAs % 3 != 0) {
    let remainder = (numAs % 3)
    totalAs += (130 * ((numAs - remainder) / 3)) + (remainder * 50)
  } else if (numAs % 3 === 0) {
    totalAs += (130 * (numAs / 3))
  }
  else { 
    totalAs += (50 * numAs)
  }
  return totalAs
}

Shop.prototype.totalBs = function (numBs) {
  let totalBs = 0
  if (numBs > 2 && numBs % 2 != 0) {
    totalBs += (45 * ((numBs - 1) / 2)) + 30
  } else if (numBs % 2 === 0) {
    totalBs += (45 * (numBs / 2))
  } else { 
    totalBs += 30
  }
  return totalBs
}

