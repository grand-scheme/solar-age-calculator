import LifeExpectancy from './../src/js/life-expectancy.js';

describe('LifeExpectancy', () => {
  let goodLifeInput;
  beforeEach(() => {
    goodLifeInput = new LifeExpectancy(50);
  });
  test('should exclude input that is not a number', () => {
    const badLifeInput = new LifeExpectancy("jungle gym");
    expect(badLifeInput.LifeExpectancy()).toEqual("is not a number");
  });
});