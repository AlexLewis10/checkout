function Shop () {
}

Shop.prototype.checkout = function (code) {
  if (code === 'A') {
    return 50
  }
  if (code === 'B') {
    return 30
  }
  if (code === 'C') {
    return 20
  }
  if (code === 'D') {
    return 15
  }
  
}