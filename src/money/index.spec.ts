import Expression, { Sum } from '../expression';
import Money from '../money';
import Bank from '../bank';

describe('Money', () => {
  it('should sum $5 + 10CHF as being $10 if exchange rate is 2:1', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);

    const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');

    expect(result).toEqual(Money.dollar(10));
  });

  describe('addition', () => {
    it('should return a Sum expression if currencies are not equal', () => {
      const fiveBucks: Money = Money.dollar(5);
      const fiveFrancs: Money = Money.franc(5);

      const sumExp: Expression = fiveBucks.plus(fiveFrancs);
      const sum = sumExp as Sum;

      expect(sum.augend).toEqual(fiveBucks);
      expect(sum.addend).toEqual(fiveFrancs);
    });

    it('should sum $5 + $5 and get $10', () => {
      const five: Money = Money.dollar(5);
      const sum: Expression = five.plus(five);
      const bank = new Bank();

      const reduced: Money = bank.reduce(sum, 'USD');

      expect(reduced).toEqual(Money.dollar(10));
    });

    it('should return a Money object if the two currencies are the same', () => {
      const result = Money.dollar(1).plus(Money.dollar(1));
      expect(result).toBeInstanceOf(Money);
    });
  });

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

  describe('equality', () => {
    it('should return false if object is not parsable to Money', () => {
      class MyTestingClz {}
      const myTestingObj = new MyTestingClz();
      expect(Money.dollar(5).equals(myTestingObj)).toBe(false);
    });

    it('should consider an object representing $5 equals to another object representing $5', () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
      expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
      expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
    });
  });

  describe('currency', () => {
    expect(Money.dollar(5).currency).toEqual('USD');
    expect(Money.franc(5).currency).toEqual('CHF');
  });
});
