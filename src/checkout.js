function Shop () {
}

Shop.prototype.checkout = function (code) {
  let codeArray = code.split('')
  let total = 0
  let numAs = 0
  for (let i = 0; i < codeArray.length; i++) {
    if (code[i] === 'A') {
      numAs += 1
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
  if (numAs > 3 && numAs % 3 != 0) {
    let remainder = (numAs % 3)
    total += (remainder * 50)
    total += (130 * ((numAs - remainder) / 3) )
  } else if (numAs % 3 === 0) {
    total += (130 * (numAs / 3))
  }
  else { 
    total += (50 * numAs)
  }
  return total
}


