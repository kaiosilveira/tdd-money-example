import Franc from '.';
import Dollar from '../dollar';

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

  describe('equality', () => {
    it('should consider an object representing $5 equals to another object representing $5', () => {
      expect(new Franc(5).equals(new Franc(5))).toBe(true);
      expect(new Franc(5).equals(new Franc(6))).toBe(false);
      expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
      expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    });
  });
});
