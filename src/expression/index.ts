import Money from '../money';

export default interface Expression {
  reduce(to: string): Money;
}

export class Sum implements Expression {
  private _augend: Money;
  private _addend: Money;

  constructor(augend: Money, addend: Money) {
    this._augend = augend;
    this._addend = addend;
  }

  get augend(): Money {
    return this._augend;
  }

  get addend(): Money {
    return this._addend;
  }

  reduce(to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
