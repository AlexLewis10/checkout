describe('Shop', function() {
  let shop

  beforeEach(function () {
    shop = new Shop()
  })

  describe('String with A', function () {
    it('Returns 50', function() {
      expect(shop.checkout('A')).toEqual(50)
    })
  })
})
