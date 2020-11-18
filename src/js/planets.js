export default class Planets {
  constructor(ageC) {
    this.ageC = ageC;
    this.mercury = (this.ageC + 1);
    this.ven = (this.ageC * 0.62);
    this.mars = (this.ageC + 3);
    this.jup = (this.ageC + 4);
  }

  Planets() {
      if (isNaN(this.ageC)) {
        return "is not a number";
      } else {
        planetaryArray = new Planets(this.ageC, this.mercury, this.ven, this.mars, this.jup);
      }
  }
}