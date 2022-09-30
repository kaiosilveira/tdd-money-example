import Expression, { Sum } from '.';
import Bank from '../bank';
import Money from '../money';

describe('Sum', () => {
  describe('plus', () => {
    it('should sum two expressions', () => {
      const fiveBucks: Expression = Money.dollar(5);
      const tenFrancs: Expression = Money.franc(10);
      const bank: Bank = new Bank();
      bank.addRate('CHF', 'USD', 2);

      const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
      const result = sum.reduce(bank, 'USD');

      expect(result).toEqual(Money.dollar(15));
    });
  });

  describe('times', () => {
    it('should multiply a sum', () => {
      const fiveBucks: Expression = Money.dollar(5);
      const tenFrancs: Expression = Money.franc(10);
      const bank: Bank = new Bank();
      bank.addRate('CHF', 'USD', 2);

      const sum = new Sum(fiveBucks, tenFrancs).times(2);
      const result = sum.reduce(bank, 'USD');

      expect(result).toEqual(Money.dollar(20));
    });
  });
});
