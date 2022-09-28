export default class Dollar {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(dollar: Object): boolean {
    return this.amount == (dollar as Dollar).amount;
  }
}
