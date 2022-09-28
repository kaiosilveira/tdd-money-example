import Dollar from '.';

describe('Multi currency money', () => {
  it.todo('should sum $5 + 10CHF as being $10 if exchange rate is 2:1');

  describe('multiplication', () => {
    it('should multiply $5 by 2 and get $10', () => {
      const five = new Dollar(5);
      five.times(2);
      expect(five.amount).toEqual(10);
    });

    it('should preserve the initial dollar amount when multiplying multiple times', () => {
      const five = new Dollar(5);
      let product: Dollar = five.times(2);
      expect(product.amount).toEqual(10);
      product = five.times(3);
      expect(product.amount).toEqual(15);
    });
  });
});
