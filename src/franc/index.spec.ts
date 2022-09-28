import Franc from '.';

describe('Franc', () => {
  describe('multiplication', () => {
    it('should multiply $5 by 2 and get $10', () => {
      const five = new Franc(5);
      const product = five.times(2);
      expect(product.equals(new Franc(10))).toBe(true);
    });

    it('should preserve the initial dollar amount when multiplying multiple times', () => {
      const five = new Franc(5);
      let product: Franc = five.times(2);
      expect(product.equals(new Franc(10))).toBe(true);
      product = five.times(3);
      expect(product.equals(new Franc(15))).toBe(true);
    });
  });
});
