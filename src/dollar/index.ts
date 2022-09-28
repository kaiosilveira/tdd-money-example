import Money from '../money';

export default class Dollar extends Money {
  private amount: number;

  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar: Object): boolean {
    return this.amount == (dollar as Dollar).amount;
  }
}
