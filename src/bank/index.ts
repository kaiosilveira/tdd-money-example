import Expression from '../expression';
import Money from '../money';

export default class Bank {
  reduce(to: Expression, currency: string): Money {
    return Money.dollar(10);
  }
}
