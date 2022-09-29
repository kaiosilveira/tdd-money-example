import Money from '../money';
import Expression from '../expression';

export default class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  rate(from: string, to: string): number {
    return from == 'CHF' && to == 'USD' ? 2 : 1;
  }
}
