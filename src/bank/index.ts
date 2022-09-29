import Money from '../money';
import Expression from '../expression';

export default class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
