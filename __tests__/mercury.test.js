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
    expect (mercTestFive.verifyAge()).toEqual("is not a number");
  });
});

//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });
//   test('should correctly determine whether three lengths make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4,5,7)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });
//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isosTriangle = new Triangle(5,5,7)
//     expect(isosTriangle.checkType()).toEqual("isosceles triangle");
//   });
//   test('should correctly determine whether three lengths make an equilateral triangle', () => {
//     const equiTriangle = new Triangle (3,3,3)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });
// });