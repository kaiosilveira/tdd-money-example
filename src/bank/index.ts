import Money from '../money';
import Expression, { Sum } from '../expression';

export default class Bank {
  reduce(source: Expression, to: string): Money {
    if (source instanceof Money) {
      source.reduce(to);
    }

    return (source as Sum).reduce(to);
  }
}
