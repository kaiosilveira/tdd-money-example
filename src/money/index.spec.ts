import Money, { Dollar } from '../money';

describe('Money', () => {
  describe('equality', () => {
    it('should consider an object representing $5 equals to another object representing $5', () => {
      expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
      expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
      expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
      expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
      expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
    });
  });

  describe('currency', () => {
    expect(Money.dollar(5).currency()).toEqual('USD');
    expect(Money.franc(5).currency()).toEqual('CHF');
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
      let product: Money = five.times(2);
      expect(product.equals(Money.dollar(10))).toBe(true);
      product = five.times(3);
      expect(product.equals(Money.dollar(15))).toBe(true);
    });
  });
});

describe('Franc', () => {
  describe('multiplication', () => {
    it('should multiply $5 by 2 and get $10', () => {
      const five = Money.franc(5);
      const product = five.times(2);
      expect(product.equals(Money.franc(10))).toBe(true);
    });

    it('should preserve the initial dollar amount when multiplying multiple times', () => {
      const five = Money.franc(5);
      let product: Money = five.times(2);
      expect(product.equals(Money.franc(10))).toBe(true);
      product = five.times(3);
      expect(product.equals(Money.franc(15))).toBe(true);
    });
  });
});
