export default class Money {
  private _amount: number;

  constructor(amount: number) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  equals(obj: Object): boolean {
    const money: Money = obj as Money;
    return this.amount == money.amount;
  }
}
