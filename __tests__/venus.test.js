import Venus from './../src/js/venus.js';

describe('Venus', () => {
  test('should convert Earth years to Venus years', () => {
    const venusTestOne = new Venus(10);
    expect(venusTestOne.calculateAge()).toBeCloseTo(6.2);
  });
  test('should verify failsafe works as intended', () => {
    const venusTestTwo = new Venus("bad input");
    expect(venusTestTwo.calculateAge()).toEqual("is not a number");
  });
});