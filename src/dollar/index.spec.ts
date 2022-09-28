import Dollar from '.';

describe('Multi currency money', () => {
  it.todo('should sum $5 + 10CHF as being $10 if exchange rate is 2:1');

  describe('multiplication', () => {
    it('should multiply $5 by 2 and get $10', () => {
      const five = new Dollar(5);
      const product = five.times(2);
      expect(product.equals(new Dollar(10))).toBe(true);
    });

    it('should preserve the initial dollar amount when multiplying multiple times', () => {
      const five = new Dollar(5);
      let product: Dollar = five.times(2);
      expect(product.equals(new Dollar(10))).toBe(true);
      product = five.times(3);
      expect(product.equals(new Dollar(15))).toBe(true);
    });
  });

  describe('equality', () => {
    it('should consider an object representing $5 equals to another object representing $5', () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    });
  });
});