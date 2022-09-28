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
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }

  abstract times(multiplier: number): Money;

  abstract currency(): string;
}

export class Dollar extends Money {
  private _currency: string;

  constructor(amount: number) {
    super(amount);
    this._currency = 'USD';
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  currency(): string {
    return this._currency;
  }
}

export class Franc extends Money {
  private _currency: string;

  constructor(amount: number) {
    super(amount);
    this._currency = 'CHF';
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  currency(): string {
    return this._currency;
  }
}

export default Money;
