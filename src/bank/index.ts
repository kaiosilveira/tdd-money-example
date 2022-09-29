import Money from '../money';
import Expression, { Sum } from '../expression';

export default class Bank {
  reduce(source: Expression, to: string): Money {
    if (source instanceof Money) return source as Money;
    const sum: Sum = source as Sum;
    return sum.reduce(to);
  }
}
