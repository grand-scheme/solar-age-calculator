import Mars from './../src/js/mars.js';

describe('Mars', () => {
  test('should convert Earth years to Mars years', () => {
    const marsTestOne = new Mars(10);
    expect(marsTestOne.calculateAge()).toBeCloseTo(18.80);
  });
  test('should verify failsafe works as intended', () => {
    const marsTestTwo = new Mars("bad input");
    expect(marsTestTwo.calculateAge()).toEqual("is not a number");
  });
});