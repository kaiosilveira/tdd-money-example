import Bank from '../bank';
import Money from '../money';

export default interface Expression {
  reduce(bank: Bank, to: string): Money;
}

export class Sum implements Expression {
  private _augend: Expression;
  private _addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this._augend = augend;
    this._addend = addend;
  }

  get augend(): Expression {
    return this._augend;
  }

  get addend(): Expression {
    return this._addend;
  }

  reduce(bank: Bank, to: string): Money {
    const amount: number =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }
}
