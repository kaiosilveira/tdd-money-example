import Money from '../money';
import Expression, { Sum } from '../expression';

export default class Bank {
  reduce(to: Expression, currency: string): Money {
    const sum: Sum = to as Sum;
    const amount: number = sum.augend.amount + sum.addend.amount;
    return new Money(amount, currency);
  }
}
