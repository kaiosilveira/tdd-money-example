import Money, { Dollar } from '../money';
import Franc from '../franc';

describe('Money', () => {
  describe('equality', () => {
    it('should consider an object representing $5 equals to another object representing $5', () => {
      expect(new Franc(5).equals(new Franc(5))).toBe(true);
      expect(new Franc(5).equals(new Franc(6))).toBe(false);
      expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
      expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
      expect(new Franc(5).equals(new Dollar(5))).toBe(false);
    });
  });
});

describe('Dollar', () => {
  it.todo('should sum $5 + 10CHF as being $10 if exchange rate is 2:1');

  describe('multiplication', () => {
    it('should multiply $5 by 2 and get $10', () => {
      const five: Money = Money.dollar(5);
      const product = five.times(2);
      expect(product.equals(Money.dollar(10))).toBe(true);
    });

    it('should preserve the initial dollar amount when multiplying multiple times', () => {
      const five = Money.dollar(5);
      let product: Dollar = five.times(2);
      expect(product.equals(Money.dollar(10))).toBe(true);
      product = five.times(3);
      expect(product.equals(Money.dollar(15))).toBe(true);
    });
  });
});
