import LifeExpectancy from './../src/js/life-expectancy.js';

describe('LifeExpectancy', () => {
  let goodLifeInput;
  beforeEach(() => {
    goodLifeInput = new LifeExpectancy(50);
  });
  test('should exclude input that is not a number', () => {
    const badLifeInput = new LifeExpectancy("jungle gym");
    expect(badLifeInput.LifeExpectancy()).toEqual("is not a number");
    // expect(goodLifeInput.LifeExpectancy()).toEqual("is a number");
  });
  test('should subtract user input from static number', () => {
    expect(100 - goodLifeInput.age).toBeCloseTo(50);
  });
  test('should incorporate tested subtraction into function', () => {
    expect(goodLifeInput.LifeExpectancy()).toBeCloseTo(50);
  });
});