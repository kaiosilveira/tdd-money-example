import Bank from '.';
import Expression, { Sum } from '../expression';
import Money from '../money';

describe('Bank', () => {
  describe('reduce', () => {
    describe('sum', () => {
      it('should reduce a sum expression', () => {
        const bank: Bank = new Bank();
        const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));

        const result: Money = bank.reduce(sum, 'USD');

        expect(result).toEqual(Money.dollar(7));
      });
    });
  });
});
