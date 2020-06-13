describe('Shop', function() {
  let shop

  beforeEach(function () {
    shop = new Shop()
  })

  describe('String with As', function () {
    it('one A returns 50', function() {
      expect(shop.checkout('A')).toEqual(50)
    })

    it('two As return 100', function() {
      expect(shop.checkout('AA')).toEqual(100)
    })
  })

  describe('String with Bs', function () {
    it('one B returns 30', function () {
      expect(shop.checkout('B')).toEqual(30)
    })
  })

  describe('String with Cs', function () {
    it('one C returns 20', function () {
      expect(shop.checkout('C')).toEqual(20)
    })
  })

  describe('String with Ds', function () {
    it('one D returns 15', function () {
      expect(shop.checkout('D')).toEqual(15)
    })
  })
})
