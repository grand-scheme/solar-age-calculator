import Planets from './../src/js/planets.js';

describe('Planets', () => {
  let planetsTest;
  beforeEach(() => {
planetsTest = new Planets(10);
  });
  test('should store value of a number into index [0]', () => {
    expect(planetsTest.ageC).toEqual(10);
  });
  test('should store value in index [2]', () => {
    expect(planetsTest.ven).toBeCloseTo(6.2);
  });
});