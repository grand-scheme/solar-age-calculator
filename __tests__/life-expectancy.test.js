import LifeExpectancy from './../src/js/life-expectancy.js';

describe('LifeExpectancy', () => {
  let goodLifeInput;
  beforeEach(() => {
    goodLifeInput = new LifeExpectancy(50);
  });
  test('should exclude input that is not a number', () => {
    const badLifeInput = new LifeExpectancy("jungle gym");
    expect(badLifeInput.TickTock()).toEqual("is not a number");
  });
  test('should subtract user input from static number', () => {
    expect(100 - goodLifeInput.age).toBeCloseTo(50);
  });
  test('should incorporate tested subtraction into function', () => {
    expect(goodLifeInput.TickTock()).toBeCloseTo(27);
  });
  test('should tell the difference between a positive and negative number of remaining years', () => {
    const deadManInput = new LifeExpectancy(100);
    expect(deadManInput.TickTock()).toBeCloseTo(23);
  });
});