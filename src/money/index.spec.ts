import { Dollar } from '../money';
import Franc from '../franc';

describe('Money', () => {
  describe('equality', () => {
    it('should consider an object representing $5 equals to another object representing $5', () => {
      expect(new Franc(5).equals(new Franc(5))).toBe(true);
      expect(new Franc(5).equals(new Franc(6))).toBe(false);
      expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
      expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
      expect(new Franc(5).equals(new Dollar(5))).toBe(false);
    });
  });
});
