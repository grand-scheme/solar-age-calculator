import Planets from './../src/js/planets.js';

describe('Planets', () => {
  let planetsTest;
  beforeEach(() => {
planetsTest = new Planets(10);
  });
  test('should store value for Mercury', () => {
    expect(planetsTest.mercury).toBeCloseTo(41.67);
  });
test('should store value for Venus', () => {
  expect(planetsTest.venus).toBeCloseTo(16.13);
});
test('should store value for Earth', () => {
  expect(planetsTest.earth).toBeCloseTo(10);
});
  test('should store value for Age', () => {
    expect(planetsTest.age).toBeCloseTo(10);
  });
  test('should store value for Mars', () => {
    expect(planetsTest.mars).toBeCloseTo(5.32);
  });
  test('should store value for Jupiter', () => {
    expect(planetsTest.jupiter).toBeCloseTo(0.84);
  });
});

describe('PlanetaryMath()', () => {
  let mathTest;
  beforeEach(() => {
    mathTest = new Planets(100);
  });
  test('should return portion of planetaryObject', () => {
    expect(mathTest.PlanetaryMath().mercury).toBeCloseTo(416.67);
  });
  test('should return different portion of planetaryObject', () => {
    expect(mathTest.PlanetaryMath().jupiter).toBeCloseTo(8.43);
  });
  test('should return error for not a number', () => {
    const badInput = new Planets("Seventeen");
    expect(badInput.PlanetaryMath()).toEqual("is not a number");
  });
});