abstract class Money {
  private _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  equals(obj: Object): boolean {
    const money: Money = obj as Money;
    return this.amount == money.amount && obj.constructor.name == this.constructor.name;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  abstract times(multiplier: number): Money;

  abstract currency(): string;
}

export class Dollar extends Money {
  private _currency: string;

  constructor(amount: number, currency: string) {
    super(amount);
    this._currency = currency;
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }

  currency(): string {
    return this._currency;
  }
}

export class Franc extends Money {
  private _currency: string;

  constructor(amount: number, currency: string) {
    super(amount);
    this._currency = currency;
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }

  currency(): string {
    return this._currency;
  }
}

export default Money;
