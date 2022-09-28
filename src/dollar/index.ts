import Money from '../money';

export default class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}
