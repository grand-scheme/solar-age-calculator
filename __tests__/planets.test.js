import Planets from './../src/js/planets.js';

describe('Planets', () => {
  let planetsTest;
  beforeEach(() => {
planetsTest = new Planets(10);
  });
  test('should store value for Venus', () => {
    expect(planetsTest.venus).toBeCloseTo(6.2);
  });
  test('should store value for Mercury', () => {
    expect(planetsTest.mercury).toBeCloseTo(2.4);
  });
  test('should store value for Age', () => {
    expect(planetsTest.age).toBeCloseTo(10);
  });
  test('should store value for Mars', () => {
    expect(planetsTest.mars).toBeCloseTo(18.80);
  });
  test('should store value for Jupiter', () => {
    expect(planetsTest.jupiter).toBeCloseTo(118.60);
  });
});

describe('PlanetaryMath()', () => {
  let mathTest;
  beforeEach(() => {
    mathTest = new Planets(100);
  });
  test('should return portion of planetaryObject', () => {
    expect(mathTest.PlanetaryMath().mercury).toBeCloseTo(24);
  });
  test('should return different portion of planetaryObject', () => {
    expect(mathTest.PlanetaryMath().jupiter).toBeCloseTo(1186);
  });
});