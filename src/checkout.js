function Shop () {
}

Shop.prototype.checkout = function (code) {
  if (code === 'A') {
    return 50
  }
  if (code === 'B') {
    return 30
  }
  
}