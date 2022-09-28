abstract class Money {
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
    return this.amount == money.amount && obj.constructor.name == this.constructor.name;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  abstract times(multiplier: number): Money;

  currency(): string {
    return this._currency;
  }
}

export class Dollar extends Money {
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}

export default Money;
