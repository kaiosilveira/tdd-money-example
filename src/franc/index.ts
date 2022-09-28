import Money from "../money";

export default class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  equals(object: Object): boolean {
    return this.amount == (object as Money).amount;
  }
}
