export default class Planets {
  constructor(age) {
    this.age     = age;
    this.mercury = (this.age * 0.24);
    this.venus   = (this.age * 0.62);
    this.mars    = (this.age * 1.88);
    this.jupiter = (this.age * 11.86);
  }

  PlanetaryMath() {
    if (isNaN(this.age)) {
      return "is not a number";
    } else {
      let planetaryObject = new Planets(this.age);
      return planetaryObject;
    }
  }
}