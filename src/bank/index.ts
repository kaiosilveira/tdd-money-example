import Money from '../money';
import Expression from '../expression';

export default class Bank {
  private _rates: Object;

  constructor() {
    this._rates = {};
  }

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;
    return this._rates[`${from}-${to}`];
  }

  addRate(from: string, to: string, rate: number): void {
    this._rates[`${from}-${to}`] = rate;
  }
}
