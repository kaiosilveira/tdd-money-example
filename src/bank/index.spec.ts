import Bank from '.';
import Expression, { Sum } from '../expression';
import Money from '../money';

describe('Bank', () => {
  describe('rates', () => {
    it('should return 1 if currencies are the same', () => {
      const bank: Bank = new Bank();
      expect(bank.rate('USD', 'USD')).toEqual(1);
    });
  });

  describe('reduce', () => {
    describe('sum', () => {
      it('should reduce a sum expression', () => {
        const bank: Bank = new Bank();
        const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.dollar(7));
      });

      it('should reduce Money', () => {
        const bank: Bank = new Bank();
        const result: Money = bank.reduce(Money.dollar(1), 'USD');
        expect(result).toEqual(Money.dollar(1));
      });

      it('should reduce mixed Money currencies', () => {
        const bank: Bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const result: Money = bank.reduce(Money.franc(2), 'USD');
        expect(result).toEqual(Money.dollar(1));
      });
    });
  });
});
