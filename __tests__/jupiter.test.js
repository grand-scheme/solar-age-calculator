import Jupiter from './../src/js/jupiter.js';

describe('Jupiter', () => {
  test('should convert Earth years to Jupiter years', () => {
    const jupiterTestOne = new Jupiter(10);
    expect(jupiterTestOne.calculateAge()).toBeCloseTo(118.6);
  });
  test('should verify failsafe works as intended', () => {
    const jupiterTestTwo = new Jupiter("bad input");
    expect(jupiterTestTwo.calculateAge()).toEqual("is not a number");
  });
});