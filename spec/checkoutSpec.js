describe('Shop', function() {
  let shop

  beforeEach(function () {
    shop = new Shop()
  })

  describe('String with A', function () {
    it('returns 50', function() {
      expect(shop.checkout('A')).toEqual(50)
    })
  })

  describe('String with B', function () {
    it('returns 30', function () {
      expect(shop.checkout('B')).toEqual(30)
    })
  })

  describe('String with C', function () {
    it('returns 20', function () {
      expect(shop.checkout('C')).toEqual(20)
    })
  })
})
