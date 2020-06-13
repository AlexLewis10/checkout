describe('Shop', function() {
  let shop

  beforeEach(function () {
    shop = new Shop()
  })

  describe('String with As', function () {
    it('one A returns 50', function() {
      expect(shop.checkout('A')).toEqual(50)
    })

    it('two As return 100', function () {
      expect(shop.checkout('AA')).toEqual(100)
    })

    it('three As return 130', function () {
      expect(shop.checkout('AAA')).toEqual(130)
    })

    it('four As return 180', function () {
      expect(shop.checkout('AAAA')).toEqual(180)
    })
  })

  describe('String with Bs', function () {
    it('one B returns 30', function () {
      expect(shop.checkout('B')).toEqual(30)
    })

    it('two Bs return 45', function () {
      expect(shop.checkout('BB')).toEqual(45)
    })

    it('three Bs return 75', function () {
      expect(shop.checkout('BBB')).toEqual(75)
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

  describe('String with different letters', function () {
    it('ABCD return 115', function () {
      expect(shop.checkout('ABCD')).toEqual(115)
    })
  })
})
