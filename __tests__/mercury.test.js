import Mercury from './../src/js/mercury.js';

describe('Mercury', () => {
  test('should identify value of Mercury', () => {
    const mercTestOne = new Mercury("words");
    expect(mercTestOne.age).toEqual("words");
  });
  test('should verify whether value is or is not a number', () => {
    const mercTestTwo = new Mercury("words");
    expect(isNaN(mercTestTwo.age)).toEqual(true);
  });
  test('should verify whether value is or is not a number, test 2', () => {
    const mercTestThree = new Mercury(7);
    expect(isNaN(mercTestThree.age)).toEqual(false);
  });
  test('should check verifyAge() function works properly', () => {
    const mercTestFour = new Mercury(8);
    expect(mercTestFour.verifyAge()).toEqual("is a number");
  });
  test('should check verifyAge() function works properly, test 2', () => {
    const mercTestFive = new Mercury("bad");
    expect(mercTestFive.verifyAge()).toEqual("is not a number");
  });

  test('should convert Earth years to Mercury years', () => {
    const mercTestSix = new Mercury(10);
    expect(mercTestSix.calculateAge()).toEqual(2.4);
  });
});