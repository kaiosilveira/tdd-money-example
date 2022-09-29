import Bank from '../bank';
import Expression, { Sum } from '../expression';

export default class Money implements Expression {
  private _amount: number;
  private _currency: string;

  constructor(amount: number, currency: string) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  equals(obj: Object): boolean {
    const money: Money = obj as Money;
    return this.amount == money.amount && money.currency == this.currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
    const rate: number = this.currency == 'CHF' && to == 'USD' ? 2 : 1;
    return new Money(this.amount / rate, to);
  }

  get currency(): string {
    return this._currency;
  }
}
